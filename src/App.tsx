import { useState } from 'react';
import { useRadio } from './components/useRadio';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Player } from './components/sections/Player';
import { Benefits } from './components/sections/Benefits';
import { Concept } from './components/sections/Concept';
import { Reach } from './components/sections/Reach';
import { Application } from './components/sections/Application';
import { Instagram } from './components/sections/Instagram';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/sections/Footer';

export default function App() {
  const player = useRadio();
  const [menuOpen, setMenuOpen] = useState(false);
  const listen = () => {
    player.start();
    setMenuOpen(false);
    document.getElementById('ao-vivo')?.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  return (
    <>
      <a href="#conteudo" className="fixed -top-[100px] left-4 z-[100] border-2 border-ink bg-white p-[14px] focus:top-2.5">Pular para o conteúdo</a>
      {player.audioElement}
      <Header onListen={listen} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onCloseMenu={() => setMenuOpen(false)} />
      <main id="conteudo">
        <Hero onListen={listen} />
        <Player state={player.state} volume={player.volume} toggle={player.toggle} changeVolume={player.changeVolume} />
        <Benefits />
        <Concept />
        <Reach onListen={listen} />
        <Application />
        <Instagram />
        <FinalCta onListen={listen} />
      </main>
      <Footer />
    </>
  );
}
