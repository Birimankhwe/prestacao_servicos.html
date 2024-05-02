// HEAD Updated upstream



<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Adicione aqui o código para enviar o e-mail, por exemplo, usando a função mail() do PHP

    $to = "aljebebi@gmail.com"; // E-mail do destinatário
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

    // Redirecionamento após o envio
    header("Location: prestacao_servicos.php?msg=enviado");
    
    exit();
}
?>
=======
>>>>>>> 8cc4fedbe9d550395df15a385f934119e86c77ba
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Adicione aqui o código para enviar o e-mail, por exemplo, usando a função mail() do PHP

    $to = "aljebebi@gmail.com"; // E-mail do destinatário
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

    // Redirecionamento após o envio
    header("Location: prestacao_servicos.php?msg=enviado");
    
    exit();
}
?>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 8cc4fedbe9d550395df15a385f934119e86c77ba
