@echo off
cd /d "%~dp0"
python.exe -c "import tkinter" >nul 2>&1
if errorlevel 1 goto launcher
start "" pythonw.exe "scripts\documents_admin.py" --allow-plain-ftp
exit /b

:launcher
py.exe -3 -c "import tkinter" >nul 2>&1
if errorlevel 1 goto missing
start "" pyw.exe -3 "scripts\documents_admin.py" --allow-plain-ftp
exit /b

:missing
chcp 65001 >nul
echo Для запуска панели нужен Python 3 с Tkinter.
pause
