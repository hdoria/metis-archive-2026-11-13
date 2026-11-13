import { ArrowDownIcon, ArrowUpRightIcon, GithubLogoIcon, GitBranchIcon, FileTextIcon, FolderOpenIcon, PlusIcon, LinkIcon } from '@phosphor-icons/react'
import { FAQS, LINKS } from './content'
import NotesPreview from './NotesPreview'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <header className="site-header page-width">
        <a className="wordmark" href="#main" aria-label="Métis, início"><img src={`${import.meta.env.BASE_URL}metis-icon.png`} alt="" width="38" height="38" />Métis</a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#demonstracao">O app</a>
          <a href="#sobre">Por que Métis</a>
          <a className="nav-github" href={LINKS.github}><GithubLogoIcon size={19} aria-hidden="true" /><span>GitHub</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero page-width" aria-labelledby="hero-title">
          <p className="hero-intro"><span aria-hidden="true" />Um app gratuito para suas notas.</p>
          <h1 id="hero-title">Um segundo cérebro,<br />feito de suas ideias.</h1>
          <p className="hero-description">Um lugar para escrever o que você aprende e conectar o que faz sentido. Notas em Markdown, guardadas com você.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#demonstracao">Veja as notas por dentro<ArrowDownIcon size={18} aria-hidden="true" /></a>
            <a className="text-link" href={LINKS.github}>Conheça o projeto<GithubLogoIcon size={19} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="demo-section page-width" id="demonstracao" aria-labelledby="demo-title">
          <div className="demo-heading"><h2 id="demo-title">Uma ideia encontra a próxima.</h2><p>Abra uma nota. Siga uma conexão.</p></div>
          <NotesPreview />
          <p className="demo-caption"><LinkIcon size={16} aria-hidden="true" />Clique nas notas e nos links para experimentar.</p>
        </section>

        <section className="features-section page-width" aria-labelledby="features-title">
          <div className="section-heading"><h2 id="features-title">O que você guarda<br />continua sendo seu.</h2><p>A nota que você escreve hoje pode ajudar em um projeto daqui a um ano. Métis dá espaço para esse reencontro.</p></div>
          <div className="feature-columns">
            <article className="feature-copy">
              <FolderOpenIcon size={29} weight="regular" aria-hidden="true" />
              <h3>Arquivos que você pode abrir.</h3>
              <p>Escolha uma pasta e escreva. Suas notas ficam em Markdown, um formato de texto que você também pode usar em outros editores.</p>
              <div className="file-stack" aria-label="Exemplo de uma pasta de notas"><div><FolderOpenIcon size={18} aria-hidden="true" /><span>Minhas notas</span></div><div><FileTextIcon size={17} aria-hidden="true" /><span>uma-ideia-puxa-outra.md</span></div><div><FileTextIcon size={17} aria-hidden="true" /><span>diario-de-leitura.md</span></div></div>
            </article>
            <article className="feature-copy">
              <GitBranchIcon size={29} weight="regular" aria-hidden="true" />
              <h3>Um histórico do seu pensamento.</h3>
              <p>Use Git para acompanhar mudanças e sincronizar suas notas com um repositório escolhido por você. Volte ao que escreveu e veja como a ideia mudou.</p>
              <div className="history-example" aria-label="Exemplo de histórico de uma nota"><div><span className="history-dot" /><span>Primeiro rascunho<small>A ideia ganhou uma página</small></span></div><div><span className="history-dot" /><span>Uma nova conexão<small>A leitura entrou na conversa</small></span></div></div>
            </article>
          </div>
        </section>

        <section className="story-section" id="sobre" aria-labelledby="story-title">
          <div className="story-inner page-width">
            <figure className="story-symbol"><img src={`${import.meta.env.BASE_URL}metis-icon.png`} width="320" height="320" alt="Símbolo do Métis: um perfil dentro de outro, em verde pinho e marfim" loading="lazy" /></figure>
            <div className="story-copy"><h2 id="story-title">Uma mente<br />dentro da outra.</h2><p>Métis era a titânide da sabedoria e do bom conselho. Na mitologia grega, Zeus a engoliu. Ela passou a aconselhá-lo de dentro da cabeça dele.</p><p>Um segundo cérebro morando dentro do primeiro. O nome e os dois perfis do nosso símbolo vêm dessa história.</p></div>
          </div>
        </section>

        <section className="faq-section page-width" aria-labelledby="faq-title">
          <h2 id="faq-title">Antes de começar.</h2>
          <div className="faq-list">{FAQS.map((item) => <details key={item.question}><summary>{item.question}<PlusIcon size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className="start-section page-width" aria-labelledby="start-title">
          <div><p className="development-note"><span aria-hidden="true" />Em desenvolvimento</p><h2 id="start-title">O próximo capítulo<br />está no GitHub.</h2><p>Acompanhe o projeto, teste o código e conte o que você gostaria de guardar no seu Métis.</p><p className="distribution-note">A distribuição pública aguarda uma licença gratuita do quadro branco.</p></div>
          <div className="start-actions"><a className="button button-primary" href={LINKS.github}>Ver o projeto no GitHub<GithubLogoIcon size={20} aria-hidden="true" /></a><a className="text-link" href={LINKS.start}>Como rodar no computador<ArrowUpRightIcon size={18} aria-hidden="true" /></a></div>
        </section>
      </main>
      <footer className="site-footer page-width"><a className="wordmark" href="#main">Métis</a><p>Feito para pensar com você.</p><nav aria-label="Rodapé"><a href={LINKS.docs}>Documentação</a><a href={LINKS.issues}>Reportar um problema</a><a href={LINKS.credits}>Créditos e licenças</a></nav></footer>
    </>
  )
}
