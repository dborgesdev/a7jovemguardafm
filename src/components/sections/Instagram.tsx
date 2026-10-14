import { ArrowUpRight, Instagram as InstagramIcon } from 'lucide-react';
import { radio } from '../../config/radio';
import { externalLink } from '../../config/links';
import { styles } from '../styles';
import { RadioName } from '../RadioName';

export function Instagram() {
  return (
    <section id="instagram" className="instagram-section relative overflow-hidden bg-[var(--red)] py-[65px] text-white max-md:py-[45px]">
      <div className={`${styles.shell} grid grid-cols-[100px_1fr_auto] items-center gap-9 max-lg:grid-cols-[85px_1fr] max-md:grid-cols-1 max-md:gap-[25px]`}>
        <div className="grid size-24 -rotate-8 place-items-center rounded-[25px] border-2 border-[#fff7e7] text-[#fff8e7] max-lg:size-[78px] max-md:size-[69px] max-md:rounded-[19px]" aria-hidden="true"><InstagramIcon className="size-[51px] max-md:size-[39px]" strokeWidth={1.5} /></div>
        <div>
          <h2 className={`${styles.heading} !mb-[17px] text-[clamp(2rem,3.1vw,3rem)] max-md:text-[2.5rem] max-[23.4375rem]:text-[2.25rem]`}>A nostalgia fica ainda melhor<br className="hidden lg:block" /> quando é compartilhada</h2>
          <p className="text-base leading-[1.7] text-white">Acompanhe a <RadioName /> no Instagram e fique mais perto da rádio.</p>
        </div>
        <a className={`${styles.button} ${styles.outlineButton} !border-cream !bg-cream whitespace-nowrap focus-visible:!outline-white max-lg:col-start-2 max-lg:justify-self-start max-md:col-start-1`} href={radio.instagram} {...externalLink}>Seguir no Instagram <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

