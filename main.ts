// Define uma interface para garantir que estamos manipulando HTMLElement
interface CustomNavigation {
    init(): void;
}

class PortfolioNavigation implements CustomNavigation {
    private navLinks: NodeListOf<HTMLAnchorElement>;

    constructor() {
        // Seleciona todos os links de navegação dentro do header
        this.navLinks = document.querySelectorAll('header nav a');
    }

    public init(): void {
        this.addSmoothScrolling();
        this.addScrollAnimation();
    }

    // Função para scroll suave (aprimorado via TS)
    private addSmoothScrolling(): void {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (event: MouseEvent) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    event.preventDefault();
                    const targetElement = document.querySelector(targetId) as HTMLElement | null;
                    
                    if (targetElement) {
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Função bônus: Adiciona uma classe ao rolar a página para criar efeitos futuros
    private addScrollAnimation(): void {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight;

            sections.forEach((section: HTMLElement) => {
                if (scrollPos > section.offsetTop + 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        };

        // Estado inicial das seções para animação
        document.querySelectorAll('section').forEach((section: HTMLElement) => {
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