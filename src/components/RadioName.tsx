type RadioNameProps = { uppercase?: boolean; className?: string };

// Text mentions use the footer's sans-serif family; original image logos stay intact.
export function RadioName({ uppercase = false, className = '' }: RadioNameProps) {
  return <span className={`radio-name font-brand ${className}`}>{uppercase ? 'A7 JOVEM GUARDA FM' : 'A7 Jovem Guarda FM'}</span>;
}
