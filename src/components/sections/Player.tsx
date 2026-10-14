import { ArrowUpRight, Pause, Play, Volume2 } from 'lucide-react';
import { asset, externalLink } from '../../config/links';
import { radio } from '../../config/radio';
import type { useRadio, AudioState } from '../useRadio';
import { Tonearm } from '../Tonearm';
import { styles } from '../styles';

type PlayerProps = Pick<ReturnType<typeof useRadio>, 'state' | 'volume' | 'toggle' | 'changeVolume'>;
const statusText: Record<AudioState, string> = {
  idle: 'Pronto para ouvir', paused: 'Pronto para ouvir', loading: 'Conectando...',
  playing: 'Reproduzindo ao vivo', error: 'Não foi possível iniciar a transmissão. Tente novamente.',
};

export function Player({ state, volume, toggle, changeVolume }: PlayerProps) {
  const canPause = state === 'playing' || state === 'loading';
  return (
    <section id="ao-vivo" className="player-section print-texture overflow-hidden border-t-[9px] border-[var(--red)] bg-cream pt-[92px] pb-[78px] max-md:py-[58px]">
      <div className={`${styles.shell} grid grid-cols-[1.08fr_1fr] items-center gap-20 max-[75rem]:gap-[45px] max-lg:gap-[30px] max-md:grid-cols-1 max-md:gap-10`}>
        <div className="disc-stage relative w-full max-w-[550px] -rotate-3 rounded-3xl border-8 border-[#bf0805] pt-[45px] pr-12 pb-[78px] pl-[30px] max-lg:border-[6px] max-lg:pt-10 max-lg:pr-[34px] max-lg:pb-16 max-lg:pl-5 max-md:mx-auto max-md:max-w-[440px] max-[23.4375rem]:pt-9 max-[23.4375rem]:pr-[29px] max-[23.4375rem]:pb-[59px] max-[23.4375rem]:pl-[18px]" aria-hidden="true">
          <div className="absolute top-[17px] left-[25px] text-[9px] font-extrabold tracking-[.14em] text-[#3f3b34] max-[23.4375rem]:text-[7px]">A7 / JOVEM GUARDA FM</div>
          <img src={asset('vinyl-player.webp')} width="962" height="941" className={`vinyl aspect-square w-full rounded-full object-contain ${state === 'playing' ? 'is-playing' : ''}`} alt="" />
          <Tonearm />
          <div className="absolute right-[22px] bottom-[17px] left-[25px] flex items-center gap-[19px]">
            <span className="deck-grille mr-auto h-[30px] w-[38%] rounded-[5px] border-[3px] border-[#c4b89d]" />
            <span className="deck-knob size-[31px] rounded-full border-[3px] border-[#958465]" />
            <span className="deck-knob size-[22px] rounded-full border-[3px] border-[#958465]" />
          </div>
        </div>
        <div className="max-md:-order-1">
          <p className={`${styles.eyebrow} text-red`}>TRANSMISSÃO AO VIVO</p>
          <h2 className={`${styles.heading} text-[clamp(2.75rem,4.6vw,4.6rem)] max-md:text-[3rem]`}>Dê o play.<br />A viagem começa</h2>
          <p className={styles.body}>Toda a nostalgia de uma época inesquecível, com a praticidade e a qualidade da transmissão digital.</p>
          <div className="player-controls relative max-w-[480px] rounded-lg border-2 border-[#a5987e] px-7 py-[25px] max-lg:p-[22px] max-md:max-w-none max-[23.4375rem]:px-[18px]" data-state={state}>
            <div className="flex items-center gap-5">
              <button className="play-control grid size-[67px] shrink-0 place-items-center rounded-full border-[3px] border-[#fff6df] bg-[var(--red)] text-white outline outline-[#a7997f] hover:bg-[#af0704] max-[23.4375rem]:size-14" onClick={toggle} aria-label={canPause ? 'Pausar rádio' : 'Ouvir rádio'}>
                {canPause ? <Pause fill="currentColor" aria-hidden="true" /> : <Play fill="currentColor" aria-hidden="true" />}
              </button>
              <div>
                <p className="mb-2 font-display text-[22px] max-lg:text-xl max-[23.4375rem]:text-[19px]">A7 Jovem Guarda FM</p>
                <p role="status" aria-live="polite" className="player-status flex items-center gap-2 text-sm leading-[1.6] text-[#3e3932]">
                  <span className={`size-[7px] shrink-0 rounded-full ${state === 'playing' ? 'bg-red' : 'bg-[#777064]'}`} />{statusText[state]}
                </p>
              </div>
            </div>
            <div className="mt-[22px] flex items-center gap-4 border-t border-[#b7aa91] pt-[17px]">
              <Volume2 size={19} aria-hidden="true" />
              <label htmlFor="volume" className="sr-only">Volume</label>
              <input id="volume" type="range" min="0" max="100" value={volume} onChange={event => changeVolume(Number(event.target.value))} className="h-[26px] min-w-0 w-full accent-red" />
              <output htmlFor="volume" className="min-w-8 text-xs font-bold">{volume}%</output>
            </div>
            {state === 'error' && <a className="mt-[18px] flex items-center gap-[7px] text-sm underline" href={radio.fallback} {...externalLink}>Abrir player externo <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </div>
        </div>
      </div>
    </section>
  );
}

