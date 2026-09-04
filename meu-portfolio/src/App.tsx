import './App.css'; // Importando o seu arquivo de estilos
import { 
  FaReact, FaJava, FaNodeJs, FaGithub, FaInstagram, 
  FaFigma, FaHtml5, FaCss3Alt, FaAngular, FaPython, 
  FaDatabase, FaLinkedin, FaYoutube 
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiC, SiCplusplus, SiSharp } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

function App() {
  return (
    <>
      {/* Cabeçalho / Navegação */}
      <header>
        <div className="logo">Portfólio</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contatos">Contatos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Seção Hero */}
        <section id="hero" className="container hero-section">
          <div className="text-content">
            <h1>Olá! Sou<br />Maria Luiza.</h1>
            <p>Estudante de Engenharia de Software | Foco em Back-end.</p>
          </div>
          <div className="image-content">
            {/* O caminho da imagem deve refletir onde ela está salva */}
            <img src="/assets/foto-hero.jpg" alt="Foto de Maria Luiza" className="circle-img" />
          </div>
        </section>

        {/* Seção Jornada */}
        <section id="jornada" className="container split-section">
          <div className="text-content">
            <h2>Minha Jornada na Tecnologia</h2>
            <p>Conheça um pouco mais sobre a minha trajetória, propósitos e o que me motiva na Engenharia de Software.</p>
          </div>
          <div className="image-content">
            <img src="/assets/foto-jornada.jpg" alt="Maria Luiza em evento" className="circle-img" />
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre" className="container sobre-section">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="sobre-grid">
            <div className="fotos-stack">
              <img src="/assets/foto-sobre1.jpg" alt="Maria Luiza com balão" className="circle-img small" />
              <img src="/assets/foto-sobre2.jpg" alt="Maria Luiza programando" className="circle-img small" />
            </div>
            <div className="texto-sobre">
              <p>Olá! Meu nome é Maria Luiza Borges Cordeiro Neiva Eulalio, tenho 20 anos e sou estudante do 6º semestre de Engenharia de Software na Universidade Católica do Salvador (UCSAL). Escolhi essa área porque acredito no poder da tecnologia para transformar vidas, ajudando pessoas por meio de soluções inovadoras para problemas reais.</p>
              <p>Com um interesse especial pelo desenvolvimento <strong>back-end</strong>, sou movida pela vontade de aprender e evoluir todos os dias. Atualmente, busco me envolver em projetos desafiadores que me permitam gerar impacto positivo e alavancar minha carreira como programadora.</p>
            </div>
          </div>
        </section>

        {/* Seção Habilidades (Com React Icons) */}
        <section id="habilidades" className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            <FaFigma className="skill-icon" title="Figma" />
            <FaHtml5 className="skill-icon" title="HTML5" />
            <FaCss3Alt className="skill-icon" title="CSS3" />
            <SiJavascript className="skill-icon" title="JavaScript" />
            <SiTypescript className="skill-icon" title="TypeScript" />
            <FaReact className="skill-icon" title="React" />
            <FaAngular className="skill-icon" title="Angular" />
            <FaJava className="skill-icon" title="Java" />
            <VscJson className="skill-icon" title="JSON" />
            <SiC className="skill-icon" title="C" />
            <SiCplusplus className="skill-icon" title="C++" />
            <SiSharp className="skill-icon" title="C#" />
            <FaNodeJs className="skill-icon" title="Node.js" />
            <FaPython className="skill-icon" title="Python" />
            <FaDatabase className="skill-icon" title="SQL" />
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projetos" className="container">
          <h2 className="section-title">Projetos</h2>
          <div className="projetos-grid">
            <div className="card-projeto">
              <h3>Projeto para controle do programa de disciplinas</h3>
              <img src="/assets/ementa-tech.jpg" alt="Ementa Tech" className="projeto-img" />
              <a href="https://github.com/ucsal/projeto-back-desenvolvimento-de-sistemas-grupo-8" target="_blank" rel="noreferrer" className="btn">Ver Projeto</a>
            </div>

            <div className="card-projeto">
              <h3>Projeto para controle de gastos financeiros</h3>
              <img src="/assets/controle-gastos.jpg" alt="App Controle de Gastos" className="projeto-img financeiro" />
              <a href="https://github.com/LuizaBorges23/Controle-de-gastos" target="_blank" rel="noreferrer" className="btn">Ver Projeto</a>
            </div>

            <div className="card-projeto">
              <h3>Projeto de Jogo de Senhas utilizando API nativa RMI</h3>
              <img src="/assets/jogo-senhas.jpg" alt="Código Jogo de Senhas" className="projeto-img" />
              <a href="https://github.com/LuizaBorges23/Jogo-Das-Senhas" target="_blank" rel="noreferrer" className="btn">Ver Projeto</a>
            </div>

            <div className="card-chamada-eventos">
              <p>Confira minha trajetória em competições, hackathons e eventos de inovação, sempre com o objetivo de usar a Engenharia de Software para criar impacto positivo.</p>
              <a href="#eventos" className="btn btn-eventos">Eventos</a>
            </div>
          </div>
        </section>

        {/* Seção Eventos */}
        <section id="eventos" className="container">
          <h2 className="section-title">Eventos</h2>
          <div className="eventos-grid">
            <div className="card-evento">
              <h4>Maratona de Programação Feminina</h4>
              <img src="/assets/maratona.jpg" alt="Maratona Feminina" className="evento-img" />
              <p><strong>4º Lugar (Sede Local)</strong><br />Participação em desafios intensos de lógica de programação e algoritmos, competindo ao lado de outras mulheres e consolidando habilidades sob pressão.</p>
            </div>

            <div className="card-evento">
              <h4>Maratona Nordestina de Programação</h4>
              <img src="/img/WhatsApp Image 2026-09-03 at 21.17.33.jpeg" alt="Maratona Nordestina de Programação" className="evento-img" style={{ objectPosition: '50% 35%' }} />
              <p><strong>Minha 2° maratona de programação</strong><br />Participei em equipe com o nome "Às quartas usamos java" com Gabriela do Vale e Laís.</p>
            </div>

            <div className="card-evento">
              <h4>NASA Space Apps Challenge</h4>
              <img src="/assets/nasa.jpg" alt="Nasa Space Apps" className="evento-img" />
              <p><strong>Jogo educativo com dados da NASA</strong><br />Desenvolvimento de uma solução para a lacuna de conhecimento sobre ações climáticas na agricultura. Um jogo que usa dados reais da NASA para salvar fazendas de crises climáticas.</p>
            </div>

            <div className="card-evento">
              <h4>Meu Primeiro Hackathon</h4>
              <img src="/assets/hackathon.jpg" alt="Primeiro Hackathon" className="evento-img" />
              <p>Protótipo para acessibilidade Turística. Imersão no desenvolvimento de soluções inclusivas focadas em melhorar a experiência de acessibilidade para turistas, unindo impacto social e tecnologia.</p>
            </div>

            <div className="card-evento">
              <h4>Imersão no Ecossistema Tech</h4>
              <div className="fotos-duplas-container">
                <img src="/assets/bahia-tech.jpg" alt="Bahia Tech Experience" className="evento-img-pequena" />
                <img src="/assets/baia.jpg" alt="Evento BAIA" className="evento-img-pequena" />
              </div>
              <p>Participação ativa em grandes eventos de inovação, como o <strong>Bahia Tech Experience</strong> e o <strong>BAIA</strong>, buscando constante atualização sobre tendências de mercado, networking e evolução na área de Engenharia de Software.</p>
            </div>
          </div>
        </section>

        {/* Seção Contatos */}
        <section id="contatos" className="container contatos-section">
          <div className="decor-circle top-right"></div>
          <div className="decor-circle bottom-left"></div>
          
          <h2 className="section-title underline">Contatos</h2>
          <p className="contato-texto">Atualmente buscando oportunidades para ingressar no mercado de desenvolvimento de software. Se você gostou do meu perfil ou dos meus projetos acadêmicos, conecte-se comigo através dos canais abaixo!</p>
          
          <p className="email">marialuizaborgescordeiro@gmail.com</p>
          
          <div className="redes-sociais">
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com/LuizaBorges23" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;