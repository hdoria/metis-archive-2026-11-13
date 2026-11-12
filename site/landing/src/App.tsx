import { BookOpenIcon, FileTextIcon, GitBranchIcon, GithubLogoIcon, LinkIcon } from '@phosphor-icons/react'
import { LINKS } from './content'

const features = [
  { icon: FileTextIcon, title: 'Write in your own files', text: 'Capture a thought, keep a journal, or work through a project. Your notes stay in Markdown on your computer.' },
  { icon: LinkIcon, title: 'Follow the connections', text: 'Link ideas, add properties, and find related notes. A thought becomes easier to use when you can find it again.' },
  { icon: GitBranchIcon, title: 'Keep the history', text: 'Review changes and sync your vault with Git. You choose the repository and keep control of your files.' },
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label="Métis home"><img src={`${import.meta.env.BASE_URL}metis-icon.png`} alt="" width="36" height="36" />Métis</a>
        <nav aria-label="Main navigation">
          <a href="#features">The app</a><a href={LINKS.docs}>Documentation</a>
          <a href={LINKS.github}>GitHub <GithubLogoIcon size={18} aria-hidden /></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="intro">A free app for your second brain.</p>
            <h1 id="hero-title">Give your thoughts<br />a place to live.</h1>
            <p className="hero-description">Notes, connections, and the things you want to remember. Métis keeps them in files you own, ready when you need them.</p>
            <div className="hero-actions"><a className="primary-link" href={LINKS.github}>Build Métis <GithubLogoIcon size={19} aria-hidden /></a><a className="secondary-link" href={LINKS.docs}>Read the docs <BookOpenIcon size={19} aria-hidden /></a></div>
            <p className="availability">Free and open source. Desktop, web, and mobile source code.<br />Distribution is pending a free tldraw whiteboard license.</p>
          </div>
          <figure className="hero-symbol"><img src={`${import.meta.env.BASE_URL}metis-icon.png`} width="440" height="440" alt="The Métis symbol: one mind within another" /><figcaption>A second mind, close at hand.</figcaption></figure>
        </section>
        <section className="features" id="features" aria-labelledby="features-title">
          <h2 id="features-title">Keep what you learn.<br />Find it when it matters.</h2>
          <div className="feature-list">{features.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={28} weight="duotone" aria-hidden /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="name-story" aria-labelledby="name-title">
          <h2 id="name-title">Why Métis?</h2>
          <div><p>In Greek mythology, Métis was the titaness of wisdom and good counsel. After Zeus swallowed her, she continued to advise him from within his head.</p><p>A second brain inside the first. That is the idea behind the name and the two profiles in our symbol.</p></div>
        </section>
        <section className="open-source" aria-labelledby="open-title"><div><h2 id="open-title">Your notes belong to you.</h2><p>The app is free, and its source is available under AGPL-3.0-or-later. Optional AI providers and hosting services may charge for their services.</p></div><a className="primary-link" href={LINKS.github}>Explore the code <GithubLogoIcon size={19} aria-hidden /></a></section>
      </main>
      <footer><a className="wordmark" href="#main">Métis</a><span>A project by Hugo Doria.</span><nav aria-label="Footer"><a href={LINKS.issues}>Report an issue</a><a href={LINKS.license}>License</a><a href={LINKS.notices}>Attributions</a></nav></footer>
    </>
  )
}
