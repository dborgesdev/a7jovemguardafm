import { RadioName } from '../RadioName';
import { styles } from '../styles';

export function FinalCta() {
  return (
    <section className="final-cta print-texture relative overflow-hidden bg-cream pt-20 pb-[95px] max-md:pt-[55px] max-md:pb-[85px]">
      <div className="final-record" aria-hidden="true" />
      <div className={`${styles.shell} relative z-2`}>
        <div>
          <p className={`${styles.eyebrow} !mb-5 text-[#b50705]`}><RadioName uppercase /></p>
          <h2 className={`${styles.heading} text-[clamp(4rem,7.8vw,7.2rem)] text-red uppercase max-md:text-[clamp(3.7rem,12vw,5.3rem)]`}><span className="font-lettering text-[.75em] leading-[1.45] text-ink">A Rádio</span><br />da sua Vida</h2>
          <p className="text-base">Do Brasil para o Mundo. 24 horas no ar.</p>
        </div>
      </div>
    </section>
  );
}

