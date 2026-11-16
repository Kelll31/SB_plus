<?php
// This entry point intentionally also parses on the legacy host's PHP 5.3.
// The application itself requires a supported PHP version.
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
if (version_compare(PHP_VERSION, '8.2.0', '<')) {
    if (isset($_GET['action']) && $_GET['action'] === 'content') {
        readfile(dirname(__FILE__) . '/../content.json');
        exit;
    }
    header('HTTP/1.1 503 Service Unavailable');
    echo json_encode(array('error' => 'Для панели управления требуется PHP 8.2 или новее. Попросите хостинг обновить PHP и включить HTTPS. Публичный сайт продолжает работать.'));
    exit;
}
define('SB_API_ENTRY', true);
require __DIR__ . '/app.php';
