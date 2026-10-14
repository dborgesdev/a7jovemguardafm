import { ArrowUpRight } from 'lucide-react';
import { visuals } from '../../config/visuals';
import { styles } from '../styles';
import { RadioName } from '../RadioName';

export function Concept() {
  return (
    <section id="a-radio" className={`${styles.panel} concept-panel print-texture`}>
      <img className={`${styles.panelImage} -z-2 left-0 w-[72%] object-cover object-[35%_center] max-md:h-[400px] max-md:w-full`} loading="lazy" src={visuals.concept} alt="Ilustração de um rádio retrô vermelho e creme" width="1536" height="1024" />
      <div className="panel-geometry" aria-hidden="true" />
      <div className={`${styles.shell} ${styles.panelShell}`}>
        <div className={`${styles.panelCopy} ml-auto`}>
          <p className={`${styles.eyebrow} text-red`}>O ESPÍRITO DA JOVEM GUARDA</p>
          <h2 className={`${styles.heading} ${styles.panelHeading}`}>Um tempo que<br /><span className="text-red">nunca sai de moda</span></h2>
          <p className={styles.body}>A energia, o romantismo e a alegria de uma época que marcou gerações. A <RadioName /> mantém essa emoção viva e presente em cada momento da sua programação.</p>
          <a href="#ao-vivo" className="inline-flex items-center gap-3 border-b-2 border-[#ae0805] py-3 text-[15px] font-bold text-[#ae0805]">Dê o play nessa emoção <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

