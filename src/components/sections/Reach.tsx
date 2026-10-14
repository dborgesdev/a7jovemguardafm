import { visuals } from '../../config/visuals';
import { ListenButton, type ListenProps } from '../ListenButton';
import { styles } from '../styles';

export function Reach({ onListen }: ListenProps) {
  return (
    <section className={`${styles.panel} reach-panel print-texture border-t-2 border-ink !bg-[#f4eee5]`}>
      <img className={`${styles.panelImage} -z-2 right-0 w-[68%] object-cover object-right max-md:h-[380px] max-md:w-full`} loading="lazy" src={visuals.reach} alt="Composição ilustrativa de vinil e formas geométricas vermelhas" width="1600" height="1067" />
      <div className="panel-geometry" aria-hidden="true" />
      <div className={`${styles.shell} ${styles.panelShell}`}>
        <div className={styles.panelCopy}>
          <p className={`${styles.eyebrow} text-red`}>DO BRASIL PARA O MUNDO</p>
          <h2 className={`${styles.heading} ${styles.panelHeading}`}>Uma rádio<br /><span className="text-red">sem fronteiras</span></h2>
          <p className={styles.body}>Onde você estiver, a A7 Jovem Guarda FM está com você. Uma transmissão disponível 24 horas por dia, com áudio em alta definição para acompanhar a sua rotina.</p>
          <ListenButton onListen={onListen} />
        </div>
      </div>
    </section>
  );
}

