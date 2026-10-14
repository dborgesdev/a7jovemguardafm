import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '../../config/radio';
import { asset } from '../../config/links';
import { ListenButton, type ListenProps } from '../ListenButton';
import { styles } from '../styles';

type HeaderProps = ListenProps & {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Header({ onListen, menuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  const topMarker = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!topMarker.current) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), { threshold: 1 });
    observer.observe(topMarker.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
    <div ref={topMarker} aria-hidden="true" className="pointer-events-none absolute top-0 left-0 size-px" />
    <header data-scrolled={scrolled} className={`site-header sticky top-0 z-50 border-b border-[#d3c5ad] bg-[#faf5eaef] transition-shadow duration-300 ${scrolled ? 'shadow-[0_6px_18px_-8px_rgba(209,10,6,0.25)]' : 'shadow-none'}`}>
      <div className={`${styles.shell} flex min-h-[calc(var(--header-height)_-_1px)] items-center justify-between gap-5`}>
        <a href="#inicio" aria-label="A7 Jovem Guarda FM — Início">
          <img src={asset('logo-original-transparent.png')} width="315" height="308" alt="A7 Jovem Guarda FM" className="h-[84px] w-[88px] object-contain max-lg:h-[72px] max-lg:w-[74px] max-md:h-[66px] max-md:w-16" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="border-b-2 border-transparent py-4 text-sm font-bold transition-colors hover:border-[#bd0704] hover:text-[#bd0704]">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ListenButton onListen={onListen} />
          <button className={`${styles.iconButton} lg:hidden`} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={onToggleMenu}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Navegação móvel" className={`${styles.shell} grid gap-1 pb-5 lg:hidden`}>
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={onCloseMenu} className="rounded-lg px-3 py-3 hover:bg-stone-100">{label}</a>)}
        </nav>
      )}
    </header>
    </>
  );
}

