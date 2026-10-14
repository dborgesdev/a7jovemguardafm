// Shared Tailwind recipes keep spacing and type consistent across sections.
export const styles = {
  shell:
    "shell mx-auto w-[min(1280px,calc(100%_-_96px))] max-[75rem]:w-[calc(100%_-_64px)] max-md:w-[calc(100%_-_40px)] max-[23.4375rem]:w-[calc(100%_-_32px)]",
  eyebrow:
    "eyebrow mb-6 flex items-center gap-[11px] text-xs font-extrabold tracking-[.12em] max-md:mb-[21px] max-md:text-[10px] max-md:tracking-[.09em]",
  body: "body-copy mb-[30px] max-w-[470px] text-[17px] leading-[1.8] text-[#393630] max-lg:text-base",
  heading:
    "mb-[25px] font-display font-normal leading-[1.12] tracking-[-.015em]",
  panelHeading:
    "text-[clamp(3rem,4.8vw,4.8rem)] max-[75rem]:text-[3.5rem] max-lg:text-[3rem] max-md:text-[clamp(2.6rem,9vw,3.6rem)] max-[23.4375rem]:text-[2.6rem]",
  button:
    "button inline-flex min-h-14 items-center justify-center gap-[13px] rounded-full border-2 border-transparent px-[30px] py-[18px] text-[15px] font-bold transition-[transform,background] duration-200 hover:-translate-y-0.5 max-md:min-h-[54px] max-md:px-[23px] max-md:py-4 max-md:text-sm",
  redButton: "red bg-[var(--red)] text-white hover:bg-[#ae0704]",
  outlineButton:
    "outline border-red bg-[#fff8eaaa] text-[#b20805] hover:bg-[#fff8ea]",
  iconButton:
    "icon-button flex min-h-11 min-w-11 items-center justify-center border-0 bg-transparent",
  panel:
    "visual-panel relative isolate min-h-[630px] overflow-hidden bg-cream max-lg:min-h-[590px] max-md:min-h-0",
  panelShell:
    "panel-shell relative flex min-h-[inherit] items-center py-[85px] max-md:block max-md:pt-[47px] max-md:pb-[360px]",
  panelCopy:
    "panel-copy relative w-[44%] max-[75rem]:w-[45%] max-md:m-0 max-md:w-full max-md:max-w-[500px]",
  panelImage:
    "panel-image absolute h-full max-w-none max-md:top-auto max-md:bottom-0",
};
