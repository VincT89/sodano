<?php
/* Sodano Consulting – invio del modulo contatti.
   Funziona su qualsiasi hosting con PHP (es. Aruba, SiteGround, cPanel).
   Imposta qui sotto la casella che riceve le richieste e il mittente del dominio. */

$TO   = 'info@sodanoconsulting.it';
$FROM = 'noreply@sodanoconsulting.it'; // deve essere una casella del vostro dominio
$MIN_SECONDS = 3;                      // invii più veloci = bot
$MAX_PER_HOUR = 5;                     // limite di invii per indirizzo IP

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function out($code, $arr) { http_response_code($code); echo json_encode($arr); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'method']);

$raw = file_get_contents('php://input');
$d = json_decode($raw, true);
if (!is_array($d)) out(400, ['ok' => false, 'error' => 'bad_request']);

// anti-spam: campo trappola e tempo minimo di compilazione
if (!empty($d['website'])) out(200, ['ok' => true]);               // bot: risposta finta
if (isset($d['elapsed']) && intval($d['elapsed']) < $MIN_SECONDS * 1000) out(200, ['ok' => true]);

// limite per IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'x';
$f = sys_get_temp_dir() . '/sodano_rl_' . md5($ip);
$hits = array_filter(@json_decode(@file_get_contents($f), true) ?: [], fn($t) => $t > time() - 3600);
if (count($hits) >= $MAX_PER_HOUR) out(429, ['ok' => false, 'error' => 'rate_limit']);
$hits[] = time(); @file_put_contents($f, json_encode(array_values($hits)));

$clean = fn($v, $max = 200) => trim(mb_substr(str_replace(["\r", "\n"], ' ', strip_tags((string)($v ?? ''))), 0, $max));
$name    = $clean($d['name'] ?? '');
$company = $clean($d['company'] ?? '');
$email   = filter_var(trim($d['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = $clean($d['phone'] ?? '', 40);
$service = $clean($d['service'] ?? '', 40);
$lang    = $clean($d['lang'] ?? 'it', 5);
$message = trim(mb_substr(strip_tags((string)($d['message'] ?? '')), 0, 5000));
$consent = !empty($d['consent']);

if (!$name || !$email || !$message || !$consent) out(422, ['ok' => false, 'error' => 'validation']);

$subject = 'Nuova richiesta dal sito' . ($service ? " – $service" : '') . " – $name";
$body = "Nuova richiesta dal modulo contatti di sodanoconsulting.it\n\n"
      . "Nome: $name\nAzienda: $company\nEmail: $email\nTelefono: $phone\nArea: $service\nLingua: $lang\n\n"
      . "Messaggio:\n$message\n\n"
      . "Consenso privacy: sì – " . date('d/m/Y H:i') . " – IP $ip\n";

$headers = [
  'From: Sito Sodano Consulting <' . $FROM . '>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion()
];

$ok = @mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . $FROM);
out($ok ? 200 : 500, ['ok' => (bool)$ok, 'error' => $ok ? null : 'mail']);
