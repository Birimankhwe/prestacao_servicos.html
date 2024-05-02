<?php
$to = "destinatario@example.com"; // E-mail do destinatário
$subject = "Assunto do E-mail"; // Assunto do e-mail
$message = "Conteúdo da mensagem"; // Conteúdo da mensagem

// Cabeçalhos do e-mail
$headers = "From: seu_email@example.com\r\n";
$headers .= "Reply-To: seu_email@example.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envio do e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail enviado com sucesso!";
} else {
    echo "Falha ao enviar o e-mail.";
}
?>
