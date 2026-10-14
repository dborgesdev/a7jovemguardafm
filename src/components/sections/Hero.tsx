import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { visuals } from '../../config/visuals';
import { ListenButton, type ListenProps } from '../ListenButton';
import { styles } from '../styles';

export function Hero({ onListen }: ListenProps) {
  return (
    <section id="inicio" className="hero print-texture flex min-h-[calc(100svh_-_var(--header-height))] items-center overflow-hidden bg-[#f2e9db] bg-cover bg-center max-md:items-start max-md:bg-cream max-md:bg-[length:auto_430px] max-md:bg-[position:67%_bottom] max-md:bg-no-repeat" style={{ backgroundImage: `url(${visuals.hero})` }}>
      <div className="hero-stripes" aria-hidden="true" />
      <div className={`${styles.shell} relative z-10`}>
        <div className="hero-copy relative w-[59%] pt-[54px] pb-20 max-lg:w-[68%] max-md:w-full max-md:pt-[35px] max-md:pb-[330px] max-[23.4375rem]:pb-[310px]">
          <p className={`${styles.eyebrow} !text-sm !tracking-[.02em] max-md:!text-[11px]`}>NO AR • 24 HORAS POR DIA</p>
          <h1 className="mb-6 font-normal uppercase max-md:mb-[21px]">
            <span className="hero-lettering block font-lettering text-[clamp(3.5rem,7.5vw,8rem)] leading-[1.4] tracking-[-.04em] whitespace-nowrap [word-spacing:.12em] max-lg:text-[7.1vw] max-md:text-[clamp(2.9rem,10.8vw,4.7rem)] max-[23.4375rem]:text-[10.6vw]">A Rádio</span>
            <span className="hero-solid block font-display text-[clamp(3.95rem,8.5vw,9.05rem)] leading-[1.04] tracking-[-.025em] whitespace-nowrap text-[var(--red)] max-lg:text-[8.03vw] max-md:text-[clamp(3.28rem,12.2vw,5.32rem)] max-[23.4375rem]:text-[12vw]">da sua Vida</span>
          </h1>
          <p className="hero-lead mb-7 max-w-[460px] text-[18px] leading-[1.75] max-lg:max-w-[410px] max-lg:text-[17px] max-md:max-w-[460px] max-md:text-base max-[23.4375rem]:text-[15px]">Reviva a atmosfera da Jovem Guarda em uma experiência que atravessa gerações. Uma rádio feita para acompanhar seus melhores momentos, onde você estiver.</p>
          <div className="flex flex-wrap gap-3">
            <ListenButton onListen={onListen} size="hero" />
            <a className={`${styles.button} ${styles.outlineButton} max-md:bg-[#fff8ec] max-[23.4375rem]:!px-[17px] max-[23.4375rem]:!py-[14px] max-[23.4375rem]:!text-xs [&_svg]:size-[21px]`} href="#a-radio">Conheça a rádio <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <p className="hero-signature mt-7 inline-block -rotate-4 border-b border-[#ad0805] pb-[5px] font-[Georgia,serif] text-[clamp(23px,2vw,31px)] text-[#ad0805] italic max-md:mt-[22px] max-md:text-[23px]">Do Brasil para o Mundo.</p>
        </div>
        <a href="#ao-vivo" className="absolute bottom-[17px] left-0 grid size-10 place-items-center rounded-full border border-ink max-md:bottom-5 max-md:bg-[#f5eedfcc]" aria-label="Ir para o player"><ArrowDown size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}



