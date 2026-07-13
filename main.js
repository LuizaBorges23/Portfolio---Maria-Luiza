class PortfolioNavigation {
    constructor() {
        // Seleciona todos os links de navegação dentro do header
        this.navLinks = document.querySelectorAll('header nav a');
    }
    init() {
        this.addSmoothScrolling();
        this.addScrollAnimation();
    }
    // Função para scroll suave (aprimorado via TS)
    addSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 50, // Ajuste para o tamanho do header
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    // Função bônus: Adiciona uma classe ao rolar a página para criar efeitos futuros
    addScrollAnimation() {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight;
            sections.forEach((section) => {
                if (scrollPos > section.offsetTop + 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        };
        // Estado inicial das seções para animação
        document.querySelectorAll('section').forEach((section) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
        window.addEventListener('scroll', handleScroll);
        // Dispara uma vez ao carregar
        handleScroll();
    }
}
// Inicializa a classe após o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    const portfolioNav = new PortfolioNavigation();
    portfolioNav.init();
});
