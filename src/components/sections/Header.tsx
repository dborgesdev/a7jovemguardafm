import { Menu, X } from 'lucide-react';
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
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[#d3c5ad] bg-[#faf5eaef]">
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
          <ListenButton onListen={onListen} size="header" />
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
  );
}

