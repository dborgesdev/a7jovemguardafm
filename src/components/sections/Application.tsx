import { ArrowUpRight, Smartphone } from 'lucide-react';
import { radio } from '../../config/radio';
import { externalLink } from '../../config/links';
import { visuals } from '../../config/visuals';
import { styles } from '../styles';

export function Application() {
  return (
    <section id="aplicativo" className={`${styles.panel} app-panel print-texture border-t-[12px] border-ink !bg-[#f1ece3] md:!min-h-[690px] max-lg:md:!min-h-[590px]`}>
      <div className="panel-geometry" aria-hidden="true" />
      <img className={`${styles.panelImage} z-0 left-[3%] w-[49%] object-contain object-center py-7 max-lg:-left-[3%] max-lg:w-[55%] max-md:left-0 max-md:h-[470px] max-md:w-full max-md:py-0`} loading="lazy" src={visuals.app} alt="Aplicativo A7 Jovem Guarda FM apresentado em um celular" width="1200" height="1500" />
      <div className={`${styles.shell} ${styles.panelShell} z-1 max-md:!pb-[480px]`}>
        <div className={`${styles.panelCopy} !w-[45%] ml-auto max-md:!w-full`}>
          <p className={`${styles.eyebrow} text-red`}>NOSSO APLICATIVO</p>
          <h2 className={`${styles.heading} ${styles.panelHeading}`}>Sua rádio favorita,<br /><span className="text-red">sempre por perto</span></h2>
          <p className={styles.body}>Leve a atmosfera da Jovem Guarda com você. Acesse o aplicativo e continue ouvindo a A7 Jovem Guarda FM onde e quando quiser.</p>
          <a href={radio.app} {...externalLink} className={`${styles.button} ${styles.redButton}`}><Smartphone size={19} aria-hidden="true" />Baixar o Aplicativo <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

