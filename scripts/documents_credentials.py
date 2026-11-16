"""FTP settings protected by the current Windows user's DPAPI key."""

import ctypes
from ctypes import wintypes
import json
from pathlib import Path
from uuid import uuid4


CRYPTPROTECT_UI_FORBIDDEN = 0x01


class DataBlob(ctypes.Structure):
    _fields_ = [('length', wintypes.DWORD), ('data', ctypes.POINTER(wintypes.BYTE))]


def protected_data(data, seal):
    crypt32 = ctypes.WinDLL('crypt32', use_last_error=True)
    kernel32 = ctypes.WinDLL('kernel32', use_last_error=True)
    transform = crypt32.CryptProtectData if seal else crypt32.CryptUnprotectData
    description = wintypes.LPCWSTR if seal else ctypes.POINTER(wintypes.LPWSTR)
    transform.argtypes = [ctypes.POINTER(DataBlob), description, ctypes.POINTER(DataBlob),
                          ctypes.c_void_p, ctypes.c_void_p, wintypes.DWORD, ctypes.POINTER(DataBlob)]
    transform.restype = wintypes.BOOL
    kernel32.LocalFree.argtypes = [wintypes.HLOCAL]
    kernel32.LocalFree.restype = wintypes.HLOCAL

    buffer = (wintypes.BYTE * len(data)).from_buffer_copy(data)
    source = DataBlob(len(data), buffer)
    destination = DataBlob()
    if not transform(ctypes.byref(source), None, None, None, None, CRYPTPROTECT_UI_FORBIDDEN, ctypes.byref(destination)):
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        return ctypes.string_at(destination.data, destination.length)
    finally:
        kernel32.LocalFree(ctypes.cast(destination.data, wintypes.HLOCAL))


class CredentialsStore:
    def __init__(self, directory):
        self.directory = Path(directory)
        self.path = self.directory / 'ftp-settings.dat'

    def load(self):
        if not self.path.is_file():
            return None
        try:
            values = json.loads(protected_data(self.path.read_bytes(), seal=False))
            login = values['ftp_login']
            password = values['ftp_password']
            if not isinstance(login, str) or not login or not isinstance(password, str) or not password:
                raise ValueError
        except (OSError, KeyError, TypeError, ValueError) as error:
            raise ValueError('Не удалось открыть сохранённые настройки FTP. Введите данные заново.') from error
        return {'ftp_login': login, 'ftp_password': password}

    def save(self, values):
        self.directory.mkdir(parents=True, exist_ok=True)
        data = protected_data(json.dumps(values).encode('utf-8'), seal=True)
        pending = self.path.with_name(f'ftp-settings-{uuid4().hex}.tmp')
        try:
            pending.write_bytes(data)
            pending.replace(self.path)
        finally:
            pending.unlink(missing_ok=True)
