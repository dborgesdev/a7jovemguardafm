import { Play } from 'lucide-react';
import { styles } from './styles';

export type ListenProps = { onListen: () => void };

type ListenButtonProps = ListenProps & { size?: 'default' | 'header' | 'hero' };

export function ListenButton({ onListen, size = 'default' }: ListenButtonProps) {
  // Header and hero retain their compact mobile controls.
  const sizing = size === 'header'
    ? 'max-md:!min-h-[46px] max-md:!px-[17px] max-md:!py-3 max-md:!text-xs max-[23.4375rem]:!gap-2 max-[23.4375rem]:!px-[14px] max-[23.4375rem]:!py-[11px]'
    : size === 'hero'
      ? 'max-[23.4375rem]:!px-[17px] max-[23.4375rem]:!py-[14px] max-[23.4375rem]:!text-xs [&_svg]:size-[21px]'
      : '';
  return (
    <button className={`${styles.button} ${styles.redButton} ${sizing}`} onClick={onListen}>
      <Play size={17} fill="currentColor" aria-hidden="true" />
      Ouvir agora
    </button>
  );
}

