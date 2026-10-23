import { ArrowUpRight, Instagram } from "lucide-react";
import { asset, externalLink } from "../../config/links";
import { radio } from "../../config/radio";
import { styles } from "../styles";
import { RadioName } from "../RadioName";

export function Footer() {
  return (
    <footer className="w-full border-t-[5px] border-red bg-cream text-ink px-[max(48px,calc((100%_-_1280px)/2))] max-md:px-5 [&_a]:transition-colors [&_a:hover]:text-red [&_a:focus-visible]:outline-ink!">
      <div className="flex flex-wrap items-center gap-[26px] py-[35px] max-md:gap-[17px]">
        <a href="#inicio" className="shrink-0 rounded-lg bg-cream p-2">
          <img
            src={asset("logo-original-transparent.png")}
            width="315"
            height="308"
            alt="A7 Jovem Guarda FM"
            className="w-[81px] max-md:w-[65px]"
          />
        </a>
        <div className="min-w-0 flex-1 text-[15px] leading-[1.9] max-md:text-xs">
          <p className="font-bold">
            <RadioName />
          </p>
          <p>A Rádio da sua Vida • Do Brasil para o Mundo</p>
        </div>
        <div className="flex shrink-0 items-center gap-5 max-md:w-full max-md:justify-between max-md:gap-3">
          <a
            href={radio.instagram}
            {...externalLink}
            aria-label="Instagram da A7 Jovem Guarda FM"
            className={styles.iconButton}
          >
            <Instagram size={21} aria-hidden="true" />
          </a>
          
        </div>
      </div>
      <div className="w-full mt-8 pt-6 border-t border-current/10 text-center" aria-label="Parceiros"><h3 className="mb-5 text-base font-semibold tracking-wide">Parceiros</h3><div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6"><a key="myTuner Radio" href="https://mytuner-radio.com/pt/" target="_blank" rel="noopener noreferrer" aria-label="myTuner Radio (abre em nova aba)" className="inline-flex items-center justify-center min-w-[105px] min-h-14 rounded-md bg-white/95 p-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><img src={asset("mytuner.webp")} alt="myTuner Radio" loading="lazy" className="h-10 sm:h-12 w-auto max-w-[130px] object-contain" /></a><a key="Clube de Rádios" href="https://www.cluberadios.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Clube de Rádios (abre em nova aba)" className="inline-flex items-center justify-center min-w-[105px] min-h-14 rounded-md bg-white/95 p-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><img src={asset("cluberadios.webp")} alt="Clube de Rádios" loading="lazy" className="h-10 sm:h-12 w-auto max-w-[130px] object-contain" /></a><a key="Online Radio Box" href="https://onlineradiobox.com/br/" target="_blank" rel="noopener noreferrer" aria-label="Online Radio Box (abre em nova aba)" className="inline-flex items-center justify-center min-w-[105px] min-h-14 rounded-md bg-white/95 p-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><img src={asset("radiobox.webp")} alt="Online Radio Box" loading="lazy" className="h-10 sm:h-12 w-auto max-w-[130px] object-contain" /></a><a key="RádiosNet" href="https://www.radios.com.br/" target="_blank" rel="noopener noreferrer" aria-label="RádiosNet (abre em nova aba)" className="inline-flex items-center justify-center min-w-[105px] min-h-14 rounded-md bg-white/95 p-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><img src={asset("radiosnet.webp")} alt="RádiosNet" loading="lazy" className="h-10 sm:h-12 w-auto max-w-[130px] object-contain" /></a><a key="Streema" href="https://streema.com/" target="_blank" rel="noopener noreferrer" aria-label="Streema (abre em nova aba)" className="inline-flex items-center justify-center min-w-[105px] min-h-14 rounded-md bg-white/95 p-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"><img src={"https://streema.com/static/img/flatpages/LogoStreema.png"} alt="Streema" loading="lazy" className="h-10 sm:h-12 w-auto max-w-[130px] object-contain" /></a></div></div><div className="flex justify-between gap-5 border-t border-ink/15 py-5.75 text-[13px] text-ink/80 max-md:flex-col max-md:gap-3 max-md:text-xs">
        <span>
          © {new Date().getFullYear()} <RadioName />. Todos os direitos
          reservados.
        </span>
        <a
          href={radio.credit}
          {...externalLink}
          className="flex items-center gap-[5px]"
        >
          Desenvolvido por Douglas Borges - Smart Local{" "}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
