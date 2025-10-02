// Exemplo de manipulação do DOM e eventos

// 1. Variáveis e Constantes
const saibaMaisBtn = document.getElementById('saibaMaisBtn');
const contactForm = document.getElementById('contactForm');

// 2. Event Listener para o botão "Saiba Mais" na seção Hero
saibaMaisBtn.addEventListener('click', function() {
    // Alerta simples para interação do usuário
    alert('Conheça mais sobre a nossa tecnologia de ponta!');
    
    // Exemplo de console.log() para debug
    console.log('Botão "Saiba Mais" foi clicado!');
});

// 3. Event Listener para o formulário de contato
contactForm.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 4. Estrutura de Condição e Validação
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return; // Sai da função se algum campo estiver vazio
    }

    // 5. Exemplo de uso de template string e manipulação do DOM
    const formData = `
        Nome: ${name}
        E-mail: ${email}
        Mensagem: ${message}
    `;
    console.log('Dados do formulário enviados (simulação):', formData);

    alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');

    // Limpar o formulário após o envio
    contactForm.reset();
});

// 6. Exemplo de laço de repetição
// Mudar a cor de fundo dos cards de produto para um tom mais claro
const productCards = document.querySelectorAll('.product-card');
for (let i = 0; i < productCards.length; i++) {
    // productCards[i].style.backgroundColor = '#f0f0f0';
    // Comentado para manter o estilo do CSS, mas é um exemplo funcional.
}