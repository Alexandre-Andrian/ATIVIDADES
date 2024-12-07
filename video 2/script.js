function mostrarAlerta() {
    const paisSelecionado = document.getElementById('pais').value;
    
    if (paisSelecionado) {
        // Simulando uma verificação de usuário existente
        const usuariosCadastrados = {
            brasil: true,
            argentina: false,
            portugal: false,
            rio_de_janeiro: true,
            franca: false,
            china: false,
            russia: true
        };

        // Verifica se já existe um usuário cadastrado para o país selecionado
        if (usuariosCadastrados[paisSelecionado]) {
            // Redireciona para a página de erro
            window.location.href = 'pagina/erro.html';
        } else {
            // Aqui você pode prosseguir com o cadastro
            alert("Cadastro realizado com sucesso!");
        }
    } else {
        alert("Por favor, selecione um país.");
    }
}
