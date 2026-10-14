# A7 Jovem Guarda FM — Especificação de implementação V1
Status: direção criativa proposta; pronta para V1 visual, pendências técnicas explicitadas.
Repositório de destino: https://github.com/dborgesdev/a7jovemguardafm (criado e verificado; main inicialmente contém README.md).
Referência de experiência: https://github.com/dborgesdev/geracaovinilfm (inspecionado: PlayerProvider, PlayerSection e HeroSection). Não copiar visual ou boilerplate.

## Fatos confirmados
Nome: A7 Jovem Guarda FM.
Slogan exato: A Rádio da sua Vida.
Frase exata: Do Brasil para o Mundo.
24 horas no ar; transmissão anunciada como alta definição (não inventar bitrate).
Instagram: https://www.instagram.com/a7jovemguardafmoficial/
Player externo: https://player.svrdedicado.org/player-topo-html5/7150/000000
App: https://player.svrdedicado.org/player-app-multi-plataforma/7150
Crédito: Desenvolvido por Douglas Borges - Smart Local, https://smartlocal.com.br
Identidade fornecida: vermelho, preto, branco; site predominantemente claro.
Restrições: não citar músicas, álbuns ou artistas específicos; não alegar fatos não confirmados.

## Objetivo e jornada
Página única institucional de rádio. Prioridades: ouvir ao vivo, reconhecer a marca, entender a atmosfera Jovem Guarda, acessar app e Instagram.
Público: ouvintes interessados na atmosfera cultural da Jovem Guarda (hipótese editorial, não dado demográfico).

## Sitemap e navegação
Âncoras: Início (#inicio), Ao Vivo (#ao-vivo), A Rádio (#a-radio), Aplicativo (#aplicativo), Instagram (#instagram).
Header: marca, âncoras e botão Ouvir agora.
Seções: hero, player, destaques, conceito, alcance, app, Instagram, CTA final, footer.
Não incluir Programação, WhatsApp, e-mail ou telefone sem dados.

## Copy integral
Header CTA: Ouvir agora.
Hero eyebrow: NO AR • 24 HORAS POR DIA
H1: A Rádio da sua Vida.
Hero apoio: Reviva a atmosfera da Jovem Guarda em uma experiência que atravessa gerações. Uma rádio feita para acompanhar seus melhores momentos, onde você estiver.
Hero CTA principal: Ouvir agora
Hero CTA secundário: Conheça a rádio
Frase decorativa: Do Brasil para o Mundo.
Player eyebrow: TRANSMISSÃO AO VIVO
Player H2: Dê o play. A viagem começa.
Player apoio: Toda a nostalgia de uma época inesquecível, com a praticidade e a qualidade da transmissão digital.
Player inativo: Pronto para ouvir
Player conectando: Conectando...
Player ativo: Reproduzindo ao vivo
Player erro: Não foi possível iniciar a transmissão. Tente novamente.
Controle: Ouvir rádio / Pausar rádio / Volume
Destaques:
- 24 HORAS NO AR — Sempre com você, em qualquer momento.
- ÁUDIO EM ALTA DEFINIÇÃO — Qualidade de transmissão para você ouvir melhor.
- DO BRASIL PARA O MUNDO — A Jovem Guarda em qualquer lugar.
- OUÇA NO APP — Leve a rádio com você onde estiver.
Conceito eyebrow: O ESPÍRITO DA JOVEM GUARDA
Conceito H2: Um tempo que nunca sai de moda.
Conceito corpo: A energia, o romantismo e a alegria de uma época que marcou gerações. A A7 Jovem Guarda FM mantém essa atmosfera viva e presente em cada momento da sua programação.
Alcance H2: Uma rádio sem fronteiras.
Alcance corpo: Onde você estiver, a A7 Jovem Guarda FM está com você. Uma transmissão disponível 24 horas por dia, com áudio em alta definição para acompanhar a sua rotina.
App eyebrow: NOSSO APLICATIVO
App H2: Sua rádio favorita, sempre por perto.
App corpo: Leve a atmosfera da Jovem Guarda com você. Acesse o aplicativo e continue ouvindo a A7 Jovem Guarda FM onde e quando quiser.
App CTA: Acessar aplicativo
Instagram H2: A nostalgia fica ainda melhor quando é compartilhada.
Instagram corpo: Acompanhe a A7 Jovem Guarda FM no Instagram e fique mais perto da rádio.
Instagram CTA: Seguir no Instagram
CTA final H2: A Rádio da sua Vida.
CTA final apoio: Do Brasil para o Mundo. 24 horas no ar.
CTA final botão: Ouvir agora
Footer marca: A7 Jovem Guarda FM
Footer slogans: A Rádio da sua Vida • Do Brasil para o Mundo
Footer crédito: Desenvolvido por Douglas Borges - Smart Local

## Direção visual
A linguagem é retrô anos 60, sem associar obras ou pessoas específicas. Predominância de branco e creme; vermelho intenso e preto como contrastes; toques de prata/cinza.
Tokens iniciais: red #ED0806; ink #171717; paper #FFFFFF; cream #EFEDE7; silver #C4C4C4. Ajustar após leitura do logo original.
Estilo: tipografia display condensada forte + sans-serif legível; formas circulares, linhas diagonais, textura sutil, vinil e rádio retrô. Evitar aparência dark, glass/glow exagerado e elementos genéricos.
O arquivo assets/visual-direction.webp é DIREÇÃO CONCEITUAL, não asset de produção; contém texto gerado e detalhes não verificados. Não recortar a página e utilizar como layout pronto.

## Assets
assets/brand-reference.webp: imagem original fornecida da capa/vinil; preservar como referência fiel.
assets/brand-cover.webp: recorte da capa com a marca, contém fundo branco; NÃO tratar como logo transparente.
assets/app-reference.webp: screenshot fornecido do app; referência visual, não mockup final.
Produzir assets individuais para slots:
- logo: extrair com precisão do original, preservando desenho e proporções; variantes transparentes conforme contraste
- favicon: derivar do símbolo A7 real, não redesenhar
- hero: vinil preto com selo vermelho, inspirado na marca, como elemento separado, animável via CSS; preferir composição DOM/CSS para manter controle de rotação
- conceito: rádio retrô vermelho/creme, sem marcas comerciais
- alcance: composição gráfica vinil/ondas, sem mapa factual
- app: mockup de celular com captura REAL do app fornecida, sem interface inventada
- OG: composição da marca e slogan com proporção 1200x630, sem conteúdo não verificado.
Gerar cada imagem final por slot, com WebP, tamanhos e crop apropriados; não usar a imagem conceitual integral como fundo.
Não apresentar imagens ilustrativas como registro factual.

## Player e integração
Player visual próprio, acessível, baseado em HTMLAudioElement com URL fornecida `https://s04.svrdedicado.org:7150/stream` (ainda precisa de teste real de reprodução no navegador).
O iframe do player fornecido pode ser fallback temporário se não for possível identificar o endpoint direto, mas nesse caso a animação do disco não pode alegar sincronismo real com playback do iframe.
Play somente por gesto do usuário; sem autoplay. Disco gira apenas no evento real `playing`, para no `pause`, `ended`, `error`, `waiting` quando adequado.
Estados loading, erro, pause, volume e reconexão; um único audio element, sem reproduções duplicadas. Persistência de áudio entre âncoras.
NÃO implementar consulta de metadados, polling, proxy nem API apenas para animar o disco. O elemento nativo HTMLAudioElement conectado a https://s04.svrdedicado.org:7150/stream deve ser a única fonte de verdade: evento `playing` inicia rotação, `pause`/`ended`/`error` interrompem; `waiting` sinaliza buffering. Não usar iframe embed como player principal; manter URL externa como referência/fallback explícito somente em caso de incompatibilidade. Não mostrar título/autor de faixa não consultados.
Preferir SPA estática sem API se metadados não forem necessários.

## Stack
React + TypeScript + Vite + Tailwind CSS; pnpm e pnpm-lock.yaml.
Componentes previsíveis em src/components, conteúdo/config em src/data ou src/config, public para imagens.
Evitar TanStack/SSR sem justificativa, evitar boilerplate herdado da referência. CSS global só tokens/base/efeitos complexos.
Acessibilidade: semântica, heading único H1, labels, contraste, foco, teclado, reduced motion e alt apropriado.
Responsivo: validar 320/375/768/1024/1440; mobile prioriza play e legibilidade.

## SEO e deploy
Título provisório: A7 Jovem Guarda FM | A Rádio da sua Vida
Descrição: Ouça a A7 Jovem Guarda FM ao vivo, 24 horas por dia, com transmissão em alta definição. A Rádio da sua Vida, do Brasil para o Mundo.
OG, Twitter, favicon, robots, sitemap e JSON-LD RadioStation somente com fatos verificáveis.
Canonical e sitemap aguardam domínio oficial; não usar endereço fictício.
Vercel static hosting preferencial; `pnpm build`, saída `dist`; sem servidor customizado ou secrets por padrão. SPA âncoras, sem rewrite desnecessário.

## Pendências
STREAM DIRETO FORNECIDO: https://s04.svrdedicado.org:7150/stream. Validar reprodução no navegador na V1.
BLOQUEANTE PARA PUBLICAÇÃO SEO: domínio final/canonical.
DECISÃO: não consultar metadados; nenhum endpoint de metadata é necessário.
NÃO BLOQUEANTE: arte final de conceito, alcance, OG e extração transparente da marca.
NÃO CONFIRMADOS: WhatsApp, e-mail, telefone, programação, cidade/sede, artistas, playlists, bitrate.

## Aceite V1
Landing completa e visualmente avaliável; assets individuais; marca fiel; site claro e temático; CTA toca stream real após clique; disco sincronizado com playback real; app e Instagram abrem URLs confirmadas; crédito correto; SEO sem dados fictícios; build e responsividade validados; sem commit/push/merge antes de autorização.


## Inventário real de assets na main — obrigatório
A pasta `assets/` JÁ existe no repositório e foi fornecida pelo usuário. Ela é a fonte de verdade dos arquivos de imagem. **Não alterar, sobrescrever, excluir, renomear ou regenerar nenhum asset existente.** É permitido copiá-los, sem modificar os originais, para `public/assets/` na implementação. Não utilizar imagens remotas aleatórias nem placeholders. Não usar mockup conceitual inteiro como background.
- `assets/hero-bg.webp`: background final do hero, sem textos; títulos, botões e logo devem ser HTML/componentes sobre a imagem.
- `assets/hero-visual-reference.png`: referência de composição do hero; não renderizar como imagem de fundo.
- `assets/concept-radio.webp`: imagem para seção conceito.
- `assets/reach-vinyl.webp`: composição de vinil para seção alcance, se presente; conferir arquivo exato antes de referenciar.
- `assets/app-mockup.webp`: imagem da seção aplicativo; `assets/app-reference.webp` e `assets/app-screenshot-original.webp` são referências reais.
- `assets/vinyl-player.png`: disco para animação no player; usar imagem existente, nunca gerar outro. Se o arquivo estiver ausente, sinalizar.
- `assets/logo-original-transparent.png`: logo fornecido; conferir fundo e legibilidade, sem redesenhar.
- `assets/favicon.png`: favicon fornecido.
- `assets/og-image.webp`: imagem OG fornecida.
- `assets/brand-reference.webp` e `assets/brand-cover.webp`: referências da marca.
- `assets/visual-direction.webp`, se existir: referência conceitual, nunca renderizar como uma imagem de página inteira.
Outros arquivos presentes em `assets/` devem ser preservados. Inspecionar a listagem real da pasta antes de importar. Não declarar arquivo ausente sem verificar.
Se houver divergência entre esta especificação e o arquivo existente, priorizar o arquivo REAL da main e reportar a divergência, sem substituição.

## Orientação operacional atualizada
A branch `feat/v1-site` anterior é obsoleta. **Não usá-la como base.** A V1 deve partir da `main` atual (que contém as imagens e documentos). Para desenvolvimento, criar uma NOVA branch a partir da main, por exemplo `feat/site-v1`; manter a main intacta durante a implementação. Nenhum commit/push/PR/merge sem aprovação expressa do usuário.
O stream confirmado é `https://s04.svrdedicado.org:7150/stream`. Usar player HTMLAudioElement nativo, sem polling/metadados, disco gira apenas durante evento real de reprodução.
Não criar seções de Programação ou Contato sem dados confirmados, mesmo que apareçam em imagens de referência.
