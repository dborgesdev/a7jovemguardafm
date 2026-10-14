import { benefits } from '../../data/benefits';
import { styles } from '../styles';

export function Benefits() {
  return (
    <section className="features print-texture overflow-hidden bg-[var(--red)] pt-[27px] pb-[43px] max-md:pt-[25px] max-md:pb-[35px]" aria-label="Destaques da rádio">
      <div className={`${styles.shell} features-band grid grid-cols-2 rounded-[80px] bg-cream px-6 py-9 max-lg:gap-y-7 max-lg:rounded-[35px] max-lg:px-5 max-lg:py-[30px] max-md:gap-0 max-md:rounded-[28px] max-md:px-4 max-md:py-[18px] max-[23.4375rem]:px-[10px] lg:grid-cols-4`}>
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="feature flex items-start gap-[18px] border-r border-[#cbbda5] px-5 last:border-r-0 max-[75rem]:gap-[14px] max-[75rem]:px-[15px] max-lg:even:border-r-0 max-md:block max-md:px-[13px] max-md:py-5 max-md:[&:nth-child(-n+2)]:border-b max-[23.4375rem]:px-[9px]">
            <Icon className="h-[64px] w-[54px] shrink-0 text-red max-[75rem]:w-[44px] max-lg:w-[54px] max-md:mb-[14px] max-md:size-12" strokeWidth={1.65} aria-hidden="true" />
            <div>
              <h3 className="mb-2.5 font-display text-[23px] font-normal leading-[1.2] max-[75rem]:text-xl max-lg:text-[23px] max-md:text-[22px] max-[23.4375rem]:text-xl">{title}</h3>
              <p className="text-[15px] leading-[1.6] text-[#393630] max-[75rem]:text-sm max-lg:text-[15px] max-md:text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

