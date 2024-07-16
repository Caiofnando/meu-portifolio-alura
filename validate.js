// validate.js

// Função para carregar um script de forma assíncrona
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Função para carregar um arquivo CSS de forma assíncrona
function loadCSS(url) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}

// Função para inicializar o carregamento dos recursos do seu projeto
async function initialize() {
    try {
        // Carrega o script principal do seu projeto
        await loadScript('scripts/main.js');

        // Carrega o arquivo CSS principal
        await loadCSS('styles/main.css');

        // Aqui você pode adicionar mais recursos conforme necessário

        console.log('Recursos carregados com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar recursos:', error);
    }
}

// Inicializa o carregamento dos recursos ao carregar o DOM
document.addEventListener('DOMContentLoaded', initialize);

