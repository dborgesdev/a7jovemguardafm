import { Play } from 'lucide-react';
import { styles } from './styles';

export type ListenProps = { onListen: () => void };

export function ListenButton({ onListen }: ListenProps) {
  const sizing = 'max-md:!min-h-[46px] max-md:!px-[17px] max-md:!py-3 max-md:!text-xs max-[23.4375rem]:!gap-2 max-[23.4375rem]:!px-[14px] max-[23.4375rem]:!py-[11px]';
  return (
    <button className={`${styles.button} ${styles.redButton} ${sizing}`} onClick={onListen}>
      <Play size={17} fill="currentColor" aria-hidden="true" />
      Ouvir agora
    </button>
  );
}

