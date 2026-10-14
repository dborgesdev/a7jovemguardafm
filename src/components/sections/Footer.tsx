import { ArrowUpRight, Instagram } from "lucide-react";
import { asset, externalLink } from "../../config/links";
import { radio } from "../../config/radio";
import { styles } from "../styles";
import { RadioName } from "../RadioName";

const platforms = [
  {
    file: "mytuner.webp",
    name: "myTuner Radio",
    width: 314,
    height: 356,
    size: "h-[46px] w-[42px]",
  },
  {
    file: "radiobox.webp",
    name: "Online Radio Box",
    width: 500,
    height: 234,
    size: "h-[38px] w-[82px]",
  },
  {
    file: "radiosnet.webp",
    name: "RádiosNet",
    width: 705,
    height: 381,
    size: "h-[38px] w-[82px]",
  },
  {
    file: "cluberadios.webp",
    name: "Clube Rádios",
    width: 384,
    height: 281,
    size: "h-[46px] w-[72px]",
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t-[5px] border-ink bg-ink px-[max(48px,calc((100%-1280px)/2))] text-cream max-md:px-5 [&_a]:transition-colors [&_a:hover]:text-white [&_a:focus-visible]:outline-cream!">
      <div className="flex flex-wrap items-center gap-6.5 py-8.75 max-md:gap-4.25">
        <a href="#inicio" className="shrink-0 rounded-lg bg-cream p-2">
          <img
            src={asset("logo-original-transparent.png")}
            width="315"
            height="308"
            alt="A7 Jovem Guarda FM"
            className="w-20.25 max-md:w-16.25"
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
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-3 gap-y-2 max-md:grid-cols-4 max-md:gap-x-2">
            {platforms.map(({ file, name, width, height, size }) => (
              <img
                key={file}
                src={asset(file)}
                alt={`Logotipo ${name}`}
                width={width}
                height={height}
                className={`${size} object-contain max-md:max-w-12.5 max-md:h-9`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5 border-t border-cream/20 py-5.75 text-[13px] text-cream/90 max-md:flex-col max-md:gap-3 max-md:text-xs">
        <span>
          © {new Date().getFullYear()} <RadioName />. Todos os direitos
          reservados.
        </span>
        <a
          href={radio.credit}
          {...externalLink}
          className="flex items-center gap-1.25"
        >
          Desenvolvido por Douglas Borges - Smart Local{" "}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
