<?php
if (!defined('SB_API_ENTRY')) { http_response_code(404); exit; }
// PHP 8.2+ and MySQL/MariaDB. All writes require a session and CSRF token.
ini_set('display_errors', '0');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: same-origin');
header('Cache-Control: no-store');
header('Content-Type: application/json; charset=utf-8');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'; sandbox");

function respond($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function fail($message, $status = 400) { respond(array('error' => $message), $status); }
function secure_request() {
    return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443);
}
function require_secure() {
    $local = PHP_SAPI === 'cli-server' && in_array($_SERVER['REMOTE_ADDR'] ?? '', array('127.0.0.1', '::1'), true);
    if (!secure_request() && !$local) fail('Откройте панель управления по HTTPS.', 403);
}
function read_json() {
    if (stripos(isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '', 'application/json') !== 0) fail('Ожидается JSON.', 415);
    if ((int)(isset($_SERVER['CONTENT_LENGTH']) ? $_SERVER['CONTENT_LENGTH'] : 0) > 2097152) fail('Слишком большой запрос.', 413);
    $raw = file_get_contents('php://input', false, null, 0, 2097153);
    if (strlen($raw) > 2097152) fail('Слишком большой запрос.', 413);
    $value = json_decode($raw, true);
    if (!is_array($value)) fail('Некорректные данные.');
    return $value;
}
function text_value($data, $name, $max, $required = false) {
    if (!isset($data[$name]) || !is_string($data[$name])) { if ($required) fail('Заполните обязательные поля.'); return ''; }
    $v = trim($data[$name]);
    if (($required && $v === '') || strlen($v) > $max || preg_match('//u', $v) !== 1) fail('Проверьте заполнение полей и длину текста.');
    return $v;
}
function file_ref($value, $image_only = false) {
    if (!is_string($value)) fail('Некорректный файл.');
    if ($value === '') return '';
    $extensions = $image_only ? '(jpg|jpeg|png|webp)' : '(pdf|jpg|jpeg|png|webp)';
    if (preg_match('~^images/[a-zA-Z0-9_-]+\.' . $extensions . '$~D', $value) && is_file(__DIR__ . '/../' . $value)) return $value;
    if (preg_match('~^api/index\.php\?action=file&id=([a-f0-9]{32}\.' . $extensions . ')$~D', $value, $match) && is_file(__DIR__ . '/storage/files/' . $match[1] . '.php')) return $value;
    fail('Файл не найден. Загрузите его ещё раз.');
}
function clean_content($data) {
    if (!isset($data['licenses'], $data['posts']) || !is_array($data['licenses']) || !is_array($data['posts']) || count($data['licenses']) > 100 || count($data['posts']) > 300) fail('Некорректный состав публикаций.');
    $out = array('version' => 1, 'revision' => isset($data['revision']) ? (int)$data['revision'] : -1, 'licenses' => array(), 'posts' => array());
    $ids = array();
    foreach ($data['licenses'] as $item) {
        if (!is_array($item)) fail('Некорректный документ.');
        $id = text_value($item, 'id', 80, true);
        if (!preg_match('/^[a-zA-Z0-9_-]+$/D', $id) || isset($ids[$id])) fail('Некорректный идентификатор.');
        $ids[$id] = true;
        $file = file_ref(isset($item['file']) ? $item['file'] : '');
        if ($file === '') fail('Прикрепите файл документа.');
        $license = array('id' => $id, 'title' => text_value($item, 'title', 600, true), 'description' => text_value($item, 'description', 3000), 'number' => text_value($item, 'number', 300), 'file' => $file, 'archived' => !empty($item['archived']), 'published' => !empty($item['published']));
        if (isset($item['showOnHome']) && is_bool($item['showOnHome'])) $license['showOnHome'] = $item['showOnHome'];
        if (isset($item['homeOrder']) && is_int($item['homeOrder']) && $item['homeOrder'] >= 1 && $item['homeOrder'] <= 100) $license['homeOrder'] = $item['homeOrder'];
        $out['licenses'][] = $license;
    }
    foreach ($data['posts'] as $item) {
        if (!is_array($item)) fail('Некорректная публикация.');
        $id = text_value($item, 'id', 80, true);
        if (!preg_match('/^[a-zA-Z0-9_-]+$/D', $id) || isset($ids[$id])) fail('Некорректный идентификатор.');
        $ids[$id] = true;
        $date = text_value($item, 'date', 10, true);
        if (!preg_match('/^(\d{4})-(\d{2})-(\d{2})$/D', $date, $parts) || !checkdate((int)$parts[2], (int)$parts[3], (int)$parts[1])) fail('Укажите корректную дату.');
        $out['posts'][] = array('id' => $id, 'title' => text_value($item, 'title', 600, true), 'excerpt' => text_value($item, 'excerpt', 2000, true), 'body' => text_value($item, 'body', 90000, true), 'date' => $date, 'category' => text_value($item, 'category', 120, true), 'cover' => file_ref(isset($item['cover']) ? $item['cover'] : '', true), 'published' => !empty($item['published']));
    }
    return $out;
}
function authenticated() { global $passwordHash; return !empty($_SESSION['admin']) && isset($_SESSION['last_seen'], $_SESSION['auth_version']) && time() - $_SESSION['last_seen'] < 14400 && is_string($passwordHash) && hash_equals(hash('sha256', $passwordHash), $_SESSION['auth_version']); }
function require_admin() {
    if (!authenticated()) fail('Сессия завершена. Войдите ещё раз.', 401);
    $_SESSION['last_seen'] = time();
}
function csrf_check() {
    $token = isset($_SERVER['HTTP_X_CSRF_TOKEN']) ? $_SERVER['HTTP_X_CSRF_TOKEN'] : '';
    if (!$token || !hash_equals($_SESSION['csrf'], $token)) fail('Обновите страницу и повторите действие.', 403);
}
function authorize($hash) {
    session_regenerate_id(true);
    $_SESSION['admin'] = true;
    $_SESSION['last_seen'] = time();
    $_SESSION['auth_version'] = hash('sha256', $hash);
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}
function password_value($body, $key = 'password') {
    $v = isset($body[$key]) && is_string($body[$key]) ? $body[$key] : '';
    if (strlen($v) < 12 || strlen($v) > 72) fail('Пароль должен содержать от 12 до 72 байт (для русских букв — до 36 символов).');
    return $v;
}
function get_content($pdo) {
    $json = $pdo->query('SELECT payload FROM sb_content WHERE id = 1')->fetchColumn();
    if ($json !== false) { $data = json_decode($json, true); if (is_array($data)) return $data; throw new RuntimeException('Invalid stored content'); }
    $seed = json_decode(file_get_contents(__DIR__ . '/../content.json'), true);
    if (!is_array($seed)) throw new RuntimeException('Invalid seed');
    return $seed;
}
function write_lock($storage) {
    $lock = fopen($storage . '/write-lock.php', 'c+');
    if (!$lock || !flock($lock, LOCK_EX)) throw new RuntimeException('Content lock unavailable');
    return $lock;
}
function write_content($pdo, $content, $localSQLite) {
    $content['revision'] = (int)$content['revision'] + 1;
    $json = json_encode($content, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
    if (strlen($json) > 2097152) throw new LengthException('Content limit exceeded');
    $query = $pdo->prepare($localSQLite
        ? 'INSERT INTO sb_content (id, payload) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET payload = excluded.payload'
        : 'INSERT INTO sb_content (id, payload) VALUES (1, ?) ON DUPLICATE KEY UPDATE payload = VALUES(payload)');
    $query->execute(array($json));
    return $content;
}
function store_upload($storage) {
    if (empty($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) fail('Не удалось загрузить файл. Проверьте размер файла.');
    $file = $_FILES['file'];
    if ($file['size'] < 1 || $file['size'] > 8388608 || !is_uploaded_file($file['tmp_name'])) fail('Размер файла должен быть от 1 байта до 8 МБ.');
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
    $types = array('application/pdf' => 'pdf', 'image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp');
    if (!isset($types[$mime])) fail('Поддерживаются только PDF, JPG, PNG и WebP.');
    if ($mime === 'application/pdf') {
        if (file_get_contents($file['tmp_name'], false, null, 0, 5) !== '%PDF-') fail('Некорректный PDF.');
    } else {
        $size = @getimagesize($file['tmp_name']);
        if (!$size || $size[0] > 16000 || $size[1] > 16000) fail('Некорректное или слишком большое изображение.');
    }
    $total = 0;
    foreach (glob($storage . '/files/*.php') as $existing) $total += filesize($existing);
    if ($total + $file['size'] > 536870912) fail('Достигнут лимит файлов 512 МБ.', 413);
    $id = bin2hex(random_bytes(16)) . '.' . $types[$mime];
    $path = $storage . '/files/' . $id . '.php';
    $bytes = file_get_contents($file['tmp_name']);
    if ($bytes === false) throw new RuntimeException('Upload read failed');
    $guarded = "<?php exit; ?>\n" . $bytes;
    if (file_put_contents($path, $guarded, LOCK_EX) !== strlen($guarded)) {
        if (is_file($path)) unlink($path);
        throw new RuntimeException('Upload write failed');
    }
    chmod($path, 0600);
    return array('path' => $path, 'url' => 'api/index.php?action=file&id=' . $id, 'name' => basename($file['name']));
}
try {
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    // Uploads are stored behind an executable PHP guard and served only through this route.
    if ($action === 'file') {
        $id = isset($_GET['id']) ? $_GET['id'] : '';
        if (!preg_match('/^[a-f0-9]{32}\.(pdf|jpg|png|webp)$/D', $id, $parts)) fail('Файл не найден.', 404);
        $path = __DIR__ . '/storage/files/' . $id . '.php';
        $file = @fopen($path, 'rb');
        if (!$file) fail('Файл не найден.', 404);
        $types = array('pdf' => 'application/pdf', 'jpg' => 'image/jpeg', 'png' => 'image/png', 'webp' => 'image/webp');
        header('Content-Type: ' . $types[$parts[1]]);
        header('Content-Disposition: inline; filename="document.' . $parts[1] . '"');
        fseek($file, strlen("<?php exit; ?>\n")); fpassthru($file); fclose($file); exit;
    }
    if (!is_file(__DIR__ . '/config.php')) fail('Сайт ещё не настроен. Загрузите серверную конфигурацию.', 503);
    $config = require __DIR__ . '/config.php';
    $storage = __DIR__ . '/storage';
    if (!is_dir($storage) && !mkdir($storage, 0700, true)) throw new RuntimeException('Storage unavailable');
    if (!is_dir($storage . '/files') && !mkdir($storage . '/files', 0700, true)) throw new RuntimeException('Files unavailable');
    $localSQLite = isset($config['test_sqlite']) && in_array(isset($_SERVER['HTTP_HOST']) ? explode(':', $_SERVER['HTTP_HOST'])[0] : '', array('127.0.0.1', 'localhost'), true);
    if ($localSQLite) {
        // Isolated local integration tests. Production always uses the configured MySQL database.
        $pdo = new PDO('sqlite:' . $config['test_sqlite'], null, null, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        $pdo->exec('CREATE TABLE IF NOT EXISTS sb_admin (id INTEGER PRIMARY KEY, password_hash VARCHAR(255) NOT NULL)');
        $pdo->exec('CREATE TABLE IF NOT EXISTS sb_content (id INTEGER PRIMARY KEY, payload TEXT NOT NULL)');
    } else {
        // The existing hosting uses MySQL 5.1, which predates utf8mb4. JSON is stored
        // as binary UTF-8 so Cyrillic and emoji survive without charset conversion.
        $pdo = new PDO('mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'] . ';charset=utf8', $config['db_user'], $config['db_password'], array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false));
        $pdo->exec('CREATE TABLE IF NOT EXISTS sb_admin (id TINYINT UNSIGNED PRIMARY KEY, password_hash VARCHAR(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8');
        $pdo->exec('CREATE TABLE IF NOT EXISTS sb_content (id TINYINT UNSIGNED PRIMARY KEY, payload LONGBLOB NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }
    $passwordHash = $pdo->query('SELECT password_hash FROM sb_admin WHERE id = 1')->fetchColumn();
    if ($action === 'content') {
        $content = get_content($pdo);
        $content['licenses'] = array_values(array_filter($content['licenses'], function($x) { return !empty($x['published']); }));
        $content['posts'] = array_values(array_filter($content['posts'], function($x) { return !empty($x['published']); }));
        unset($content['revision']);
        respond($content);
    }
    require_secure();
    ini_set('session.use_strict_mode', '1');
    session_name('sb_admin_session');
    session_set_cookie_params(array('lifetime' => 0, 'path' => '/', 'secure' => secure_request(), 'httponly' => true, 'samesite' => 'Strict'));
    session_start();
    if (!isset($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(32));
    if ($action === 'status') respond(array('configured' => $passwordHash !== false, 'authenticated' => authenticated(), 'csrf' => $_SESSION['csrf']));
    if ($action === 'admin-content') { require_admin(); respond(get_content($pdo)); }
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('Метод не поддерживается.', 405);
    csrf_check();
    if (in_array($action, array('login', 'setup'), true)) {
        $lock = fopen($storage . '/auth-limit.php', 'c+');
        if (!$lock || !flock($lock, LOCK_EX)) throw new RuntimeException('Rate lock unavailable');
        $raw = stream_get_contents($lock); $limits = json_decode(substr($raw, strlen("<?php exit; ?>\n")), true); if (!is_array($limits)) $limits = array();
        foreach ($limits as $key => $row) if ($row['start'] < time() - 900) unset($limits[$key]);
        $ip = hash('sha256', isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown');
        $limit = isset($limits[$ip]) ? $limits[$ip] : array('start' => time(), 'count' => 0);
        if ($limit['count'] >= 8 || count($limits) > 3000) { flock($lock, LOCK_UN); fclose($lock); fail('Слишком много попыток. Попробуйте через 15 минут.', 429); }
        $limit['count']++; $limits[$ip] = $limit;
        rewind($lock); ftruncate($lock, 0); fwrite($lock, "<?php exit; ?>\n" . json_encode($limits)); fflush($lock); flock($lock, LOCK_UN); fclose($lock);
        $body = read_json();
        if ($action === 'setup') {
            if ($passwordHash !== false) fail('Администратор уже настроен.', 409);
            $key = isset($body['setupKey']) && is_string($body['setupKey']) ? $body['setupKey'] : '';
            if (empty($config['setup_key']) || strlen($config['setup_key']) < 32 || !hash_equals($config['setup_key'], $key)) fail('Неверный ключ установки.', 403);
            $hash = password_hash(password_value($body), PASSWORD_DEFAULT);
            try { $query = $pdo->prepare('INSERT INTO sb_admin (id, password_hash) VALUES (1, ?)'); $query->execute(array($hash)); }
            catch (PDOException $error) { fail('Администратор уже настроен. Перейдите ко входу.', 409); }
            authorize($hash); respond(array('ok' => true, 'csrf' => $_SESSION['csrf']));
        }
        $password = isset($body['password']) && is_string($body['password']) ? $body['password'] : '';
        if (strlen($password) > 72 || $passwordHash === false || !password_verify($password, $passwordHash)) fail('Неверный пароль.', 401);
        authorize($passwordHash); respond(array('ok' => true, 'csrf' => $_SESSION['csrf']));
    }
    require_admin();
    if ($action === 'logout') { $_SESSION = array(); session_destroy(); setcookie('sb_admin_session', '', array('expires' => time() - 3600, 'path' => '/', 'secure' => secure_request(), 'httponly' => true, 'samesite' => 'Strict')); respond(array('ok' => true)); }
    if ($action === 'password') {
        $body = read_json(); $old = isset($body['currentPassword']) && is_string($body['currentPassword']) ? $body['currentPassword'] : '';
        if (!password_verify($old, $passwordHash)) fail('Текущий пароль указан неверно.', 403);
        $newHash = password_hash(password_value($body), PASSWORD_DEFAULT);
        $query = $pdo->prepare('UPDATE sb_admin SET password_hash = ? WHERE id = 1'); $query->execute(array($newHash));
        authorize($newHash); respond(array('ok' => true, 'csrf' => $_SESSION['csrf']));
    }
    if ($action === 'upload') {
        $lock = write_lock($storage);
        $upload = store_upload($storage);
        fclose($lock);
        respond(array('file' => $upload['url'], 'name' => $upload['name']));
    }
    if ($action === 'add-document') {
        $title = text_value($_POST, 'title', 600, true);
        $number = text_value($_POST, 'number', 300);
        $id = text_value($_POST, 'id', 36, true);
        if (!preg_match('/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/D', $id)) fail('Откройте форму добавления заново.');
        $lock = write_lock($storage);
        $content = get_content($pdo);
        if (in_array($id, array_column($content['licenses'], 'id'), true)) respond($content);
        if (count($content['licenses']) >= 100) fail('В реестре уже 100 документов. Удалите лишний документ перед добавлением.', 409);
        $upload = store_upload($storage);
        array_unshift($content['licenses'], array('id' => $id, 'title' => $title, 'description' => '', 'number' => $number,
            'file' => $upload['url'], 'archived' => false, 'published' => true));
        try {
            $content = write_content($pdo, $content, $localSQLite);
        } catch (Throwable $error) {
            unlink($upload['path']);
            throw $error;
        }
        fclose($lock);
        respond($content);
    }
    if ($action === 'remove-document') {
        $id = text_value(read_json(), 'id', 80, true);
        $lock = write_lock($storage);
        $content = get_content($pdo);
        foreach ($content['licenses'] as $index => $document) {
            if ($document['id'] !== $id) continue;
            array_splice($content['licenses'], $index, 1);
            $content = write_content($pdo, $content, $localSQLite);
            $file = $document['file'];
            if (preg_match('~^api/index\.php\?action=file&id=([a-f0-9]{32}\.(pdf|jpg|png|webp))$~D', $file, $match)
                && !in_array($file, array_column($content['licenses'], 'file'), true)
                && !in_array($file, array_column($content['posts'], 'cover'), true)) {
                $path = $storage . '/files/' . $match[1] . '.php';
                if (is_file($path)) unlink($path);
            }
            break;
        }
        fclose($lock);
        respond($content);
    }
    if ($action === 'save') {
        $body = clean_content(read_json());
        $lock = write_lock($storage);
        $current = get_content($pdo);
        if ((int)$body['revision'] !== (int)$current['revision']) { flock($lock, LOCK_UN); fclose($lock); fail('Сайт уже изменён в другой вкладке. Обновите страницу перед сохранением.', 409); }
        $body = write_content($pdo, $body, $localSQLite);
        fclose($lock);
        respond($body);
    }
    fail('Действие не найдено.', 404);
} catch (LengthException $error) {
    fail('Превышен общий объём текстовых данных.', 413);
} catch (Throwable $error) {
    error_log('SB+ API failure: ' . get_class($error));
    fail('Не удалось выполнить запрос. Проверьте настройки сервера и базы данных.', 500);
}
