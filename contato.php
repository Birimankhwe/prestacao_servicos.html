<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato</title>
    <link rel="stylesheet" href="prestacao_servicos.css">
</head>
<body>
    <header>
        <h1>Entre em Contato</h1>
    </header>
    <section>
        <form action="processa_contato.php" method="POST">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required><br>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="mensagem">Mensagem:</label><br>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea><br>
            <input type="submit" value="Enviar">
        </form>
    </section>
    <footer>
        <a href="prestacao_servicos.php">Voltar para a Página Inicial</a>
    </footer>
</body>
</html>
