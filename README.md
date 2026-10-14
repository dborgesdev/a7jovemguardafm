# A7 Jovem Guarda FM

V1 estática em React + TypeScript + Vite + Tailwind CSS. Implementação na branch `feat/site-v1`, criada da main `ff9c1ce`. As imagens originais em `assets/` são preservadas; somente os assets de produção são copiados para `public/assets/`.

## Executar

Node.js 22.12+ e pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra o endereço informado pelo Vite (normalmente http://127.0.0.1:5173).

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

O build gera `dist/`. A configuração `vercel.json` está pronta para hospedagem estática, sem APIs ou rewrites.

## Player

Um único elemento HTMLAudioElement, com preload none e sem autoplay, polling ou metadados. O clique inicia o stream confirmado. Apenas playing inicia a rotação; pause, waiting, ended e error interrompem. O controle permite cancelar a conexão e tentar novamente após erro. O link para o player externo aparece em caso de falha. Redução de movimento desativa a rotação visual sem interromper o áudio.

## SEO

Título, descrição, OG/Twitter, favicon, robots e JSON-LD com dados confirmados. O domínio oficial ainda precisa ser informado. Após confirmação, configure `SITE_URL=https://dominio-oficial` no ambiente de build: o script gera canonical, og:url, URLs absolutas das imagens e sitemap.xml. Sem SITE_URL nenhum domínio é inventado; canonical e sitemap são omitidos.

## Assets

O documento menciona vinyl-player.png, mas o arquivo real fornecido é vinyl-player.webp. A implementação usa o WebP existente, sem modificar o original. Referências de composição não são publicadas como imagens de página.


Resultados e limites das verificações: [docs/validation.md](docs/validation.md).

O refinamento visual mantém o player original. As imagens das seções estão centralizadas em src/config/visuals.ts; as fontes WOFF2 e suas licenças ficam em public/fonts/.

Cada seção fica em src/components/sections/. App.tsx coordena o player e compõe a página. Layout e tipografia usam Tailwind; o CSS global preserva os efeitos gráficos. Copy e CTA finais estão sincronizados em docs/project.md.
