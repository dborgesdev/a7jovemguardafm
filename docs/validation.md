# Validação da V1

Branch: `feat/site-v1`, criada da main atualizada `ff9c1ce`. Nenhum commit, push, PR ou merge da implementação.

## Verificações executadas

- Instalação com pnpm 11.25.0 e `install --frozen-lockfile`: passou. O lockfile contém as dependências reais da aplicação, sem o bootstrap antigo do pnpm global.
- `pnpm typecheck`: passou.
- `pnpm lint`: passou, sem erros ou warnings.
- `pnpm build`: passou; HTML, CSS, JS, robots e oito assets finais presentes em `dist`.
- Preview de produção: HTTP 200, aplicação montada no Chrome.
- Chrome desktop headless: layouts 320, 375, 768, 1024 e 1440 px, capturas integrais revisadas. Sem overflow horizontal, imagens quebradas ou destinos de âncoras ausentes.
- Menu móvel abre, navega e fecha; botão do menu oculto no desktop.
- Um H1, idioma pt-BR, nomes acessíveis nos elementos interativos, skip link por Tab/Enter, volume por teclado e redução de movimento conferidos. Esta validação não é uma auditoria de leitor de tela.
- Sem erros de console ou exceções JavaScript no fluxo principal.
- App, player externo, Instagram e Smart Local: URLs confirmadas e HTTP 200.
- Todos os hashes dos arquivos originais em `assets/` permaneceram iguais.

## Player

- Um único elemento de áudio, preload none, autoplay ausente e inicialmente pausado.
- Stream real após clique: eventos waiting e playing, readyState 4 e currentTime avançando (2,35 s na captura). Sem erro do elemento.
- Vinil em running durante a reprodução real, paused após pausa real.
- Volume 35% refletido em audio.volume = 0.35; teclado incrementou o volume de 70 para 71%.
- Testes isolados de eventos: playing inicia; waiting, pause, ended e error param a animação. Esses eventos controlados não substituem o teste de stream real descrito acima.
- Rejeição controlada da promessa play: mensagem de erro e link externo exibidos. Restaurado o método nativo, uma nova tentativa reproduziu o stream real.
- Tentativas adicionais de forçar erro de rede por interceptação de mídia não produziram o estado esperado no prazo e não são contabilizadas como testes de falha de rede aprovados.
- Reduced motion: animation-name none, sem alterar a reprodução.

## Pendências e limites

- Domínio oficial necessário para canonical, sitemap e URLs absolutas OG/Twitter. Configurar SITE_URL no build após confirmação; o script já está preparado.
- Testes de navegador executados no Chrome desktop. Safari/iOS e dispositivos móveis físicos ainda não foram testados.
- Documento cita vinyl-player.png, mas a main fornece vinyl-player.webp; utilizado o arquivo real sem alteração.
- Build pronto para Vercel; nenhum deploy foi realizado.

## Refinamento visual da V1

Implementado na mesma branch `feat/site-v1`, preservando arquitetura, copy, navegação, links, SEO e o hook `useRadio.tsx` integralmente (hash comparado antes/depois).

### Componentes e arquivos

- `src/App.tsx`: composição visual de hero, toca-discos, benefícios, painéis de conceito/alcance/app, Instagram e encerramento. Nenhuma mudança no stream ou em dados confirmados.
- `src/styles.css`: direção retrô integrada, textura CSS sutil, círculos/faixas, tipografia, camadas de imagem e layouts responsivos.
- `src/components/Tonearm.tsx`: braço e agulha vetoriais estacionários sobre o disco fornecido. Nenhuma imagem gerada e nenhum círculo vermelho fino atrás do disco.
- `src/config/visuals.ts`: referências centralizadas dos assets das seções, permitindo substituição individual futura.
- `index.html` e `public/fonts/`: preload de Monoton e Anton, WOFF2 locais (35.104 bytes combinados), font-display swap e licenças SIL OFL. Texto corrido permanece em sans-serif do sistema. Fontes oficiais: https://github.com/google/fonts/tree/main/ofl/monoton e https://github.com/google/fonts/tree/main/ofl/anton

### Verificações executadas novamente

- Typecheck, lint e build: passaram.
- Chrome: 320, 375, 768, 1024 e 1440 px, sem overflow horizontal, imagens quebradas ou âncoras inválidas. Capturas integrais geradas; composição de desktop e celular revisada visualmente.
- Hero: viewport de 900 px, header 100 px e hero 800 px. A soma ocupa uma viewport; em telas menores o conteúdo pode expandir para manter leitura e imagem.
- Fontes locais Monoton e Anton: carregadas e confirmadas com document.fonts.check.
- Stream real: waiting → playing, readyState 4, currentTime avançando, disco girando e braço parado (transform none antes e durante a reprodução). Pausa real interrompe o vinil.
- Volume, eventos isolados de buffering/erro/término, menu móvel, foco/skip link, teclado e reduced motion: passaram.
- Console: nenhuma exceção JavaScript ou mensagem de erro no fluxo testado.
- Links externos: app, player externo, Instagram e crédito responderam HTTP 200.
- Hashes de todos os originais em assets/: intactos. Sem bibliotecas adicionais de UI/animação.

As pendências de domínio oficial e testes em Safari/iOS/dispositivos físicos continuam. Nenhum commit, push, PR, merge ou deploy realizado.

## Ajustes finais e revisão arquitetural

- Dez componentes de seção em `src/components/sections/`: Header, Hero, Player, Benefits, Concept, Reach, Application, Instagram, FinalCta e Footer.
- `App.tsx`: composição em 43 linhas, com coordenação do áudio e menu, sem o JSX das seções.
- `ListenButton.tsx` e `styles.ts`: controle compartilhado e receitas Tailwind, sem bibliotecas novas. Dados dos benefícios em `src/data/benefits.ts`, assets e links compartilhados em configurações próprias.
- CSS global reduzido a tokens/fontes/reset e efeitos gráficos. Layout, dimensões, espaçamento, responsividade e tipografia definidos por utilitários Tailwind nos componentes e receitas compartilhadas.
- `Tonearm.tsx`: posicionamento em Tailwind; desenho e proporções preservados após conferência. Braço e agulha estacionários, com a ponta dentro do vinil nas cinco larguras testadas.
- Fonte vermelha do hero ajustada pela largura realmente renderizada: diferença entre linhas menor que 0,3% em 320, 375, 768, 1024 e 1440 px.
- Pontos finais removidos apenas do encerramento de h1/h2/h3. O ponto interno de Dê o play. A viagem começa foi preservado. Comparação dos parágrafos antes/depois: sem alterações.
- CTA Baixar o Aplicativo conferido nas cinco larguras, sem quebrar ou ultrapassar o container; URL, ícones e comportamento externo preservados.
- Copyright dinâmico conferido com o ano real e com Date controlado para 2030. Crédito mantido à direita no desktop e empilhado no mobile.
- Benefícios com ícones/títulos maiores e textos secundários mais legíveis, preservando a faixa e o grid.
- Typecheck, lint e build: passaram. Sem erros de console ou exceções JavaScript no fluxo testado.
- Reprodução real, pausa, volume, eventos isolados, reduced motion, braço estacionário e recuperação após rejeição controlada de play: passaram.
- Navegação, menu, skip link, teclado e nomes acessíveis: conferidos. Links externos confirmados responderam HTTP 200.
- Hashes de assets/ e useRadio.tsx: inalterados. Sem commit, push, PR, merge ou deploy.

Pendências existentes: domínio oficial para canonical/sitemap e validação em Safari/iOS/dispositivos físicos. A auditoria realizada não substitui testes com leitor de tela.

Preview final de produção: HTTP 200. Os testes específicos de H1, títulos, CTA, copyright, enquadramento, agulha e ausência de overflow também passaram em dist, nas cinco larguras.

## Integração autorizada e pendências aceitas

Commit, push, PR, CI e merge na main foram autorizados pelo usuário após a avaliação da V1. Os registros anteriores de ausência de operações Git descrevem suas respectivas etapas de implementação.

Pendências aceitas para esta integração, sem bloquear o build estático: domínio oficial para canonical/sitemap e testes em Safari/iOS/dispositivos físicos. Não há domínio fictício configurado. O script de SEO gera os dados dependentes de domínio quando SITE_URL for confirmado.

Footer final: quatro logotipos informativos, com proporções preservadas, alt descritivo, sem filtros ou links não confirmados. Validado no build em 320, 375, 768 e 1440 px; imagens carregadas e sem overflow.

CI em .github/workflows/ci.yml: instalação com lockfile, typecheck, lint, build e verificação de HTML, robots, imagens e fontes no dist. Executa em pull requests e pushes da main/feat/site-v1.

## Alterações do cliente — 14/10/2026

Implementadas localmente em feat/site-v1. A main atual contém o mesmo código da V1 e um workflow de sincronização posterior; esse workflow foi preservado com conteúdo idêntico ao blob da main (3c95d5dd0861cbcc32e6f953c22905e3093c7af0), sem execução, commit, push, PR ou merge.

### Implementação

- Header: IntersectionObserver sobre marcador do topo, com disconnect no cleanup; sem listener contínuo de scroll. Sombra rgba(209,10,6,0.25) apenas depois de rolar, com transição e reduced motion.
- Base do player: A7 JOVEM GUARDA FM, sem barra. Conjunto reduzido por viewport em telas de ao menos 768 px de largura e até 800 px de altura; controles e textos acompanham a redução. A seção mantém overflow visible. Apenas o backdrop decorativo usa recorte, sem mascarar conteúdo funcional.
- NO AR: indicador editorial separado do status local do áudio, com pulsação CSS discreta. Visível mesmo pausado; não representa uma simulação de reprodução. Preferência reduced motion desativa a pulsação.
- RadioName: mesma família Arial/Helvetica/sans-serif original do footer em nove menções textuais, inclusive player e base. Títulos e textos de imagens intactos.
- Footer: grafite #171717, textos creme, foco e divisória ajustados. Logo original sobre apoio creme para manter contraste; imagens das quatro plataformas sem filtros ou links novos.
- Conteúdo visível: emoção substitui atmosfera; exatamente um botão Ouvir agora, dentro do header. Controles próprios do player e demais CTAs preservados.
- URL oficial centralizada em src/config/site.json. Vite preenche canonical, og:url, OG/Twitter absolutos e JSON-LD. Build gera sitemap.xml e robots.txt apontando ao sitemap. HTTP preservado conforme informado, sem adotar HTTPS presumido.

### Verificações executadas

- pnpm typecheck, pnpm lint e pnpm build: passaram. Build dist servido com Vite preview e arquivos de SEO inspecionados.
- Chrome: 320×800, 375×812, 768×900, 1024×900, 1440×900, 1366×768, 1280×720 e 1366×600. Sem overflow horizontal, imagens quebradas, âncoras inválidas ou erros de console.
- Notebooks: disco, controles, botão e volume completamente abaixo do header e dentro da viewport após navegar à seção. Hit testing confirmou acesso ao botão e volume. Em 1366×600, a base termina em aproximadamente 562 px e o painel em 550 px; ambos cabem na altura disponível. Conteúdo maior em mobile continua acessível por rolagem natural.
- Header: estado false no topo, true após scroll; sombra transparente no topo e sombra vermelha após transição. IntersectionObserver mantém limpeza explícita.
- Nove nomes renderizados: família computada igual à do footer em todas as resoluções. Identificação da base sem barra, ausência de atmosfera no innerText e único CTA Ouvir agora no header confirmados.
- Rodapé desktop/mobile revisado visualmente; fundo computado rgb(23,23,23), quatro plataformas carregadas, filtro none, logo principal legível.
- Player real por clique no header: waiting → playing, readyState 4, currentTime avançando (1,40 s na captura), sem erro. Disco running e braço transform none. Pausa real muda rotação para paused. Volume 35% refletido no elemento; teclado incrementou 70% para 71%.
- Reduced motion: animações do indicador e do vinil ficam none.
- Menu móvel abre/navega/fecha, skip link por teclado chega a #conteudo. Aplicativo, Instagram e Smart Local responderam HTTP 200.
- SEO de produção: canonical e og:url = http://www.a7jovemguardafm.com/; OG/Twitter = http://www.a7jovemguardafm.com/assets/og-image.webp; JSON-LD com URL/logo do domínio informado e fatos confirmados; sitemap/robots coerentes. Nenhum placeholder de URL no HTML final.
- Hashes de todos os assets originais e das cópias em public/assets/: inalterados. Hash do hook useRadio.tsx também inalterado. Sem novas bibliotecas ou consulta de metadados.

### Pendências reais

HTTP e HTTPS do domínio informado falharam com ENOTFOUND. Consulta pública ao DNS Google retornou status 3 (NXDOMAIN) tanto para www.a7jovemguardafm.com quanto para a7jovemguardafm.com. Por isso, certificado HTTPS e redirecionamento canônico não puderam ser verificados. Configurar DNS/hosting e depois verificar SSL/redirecionamento; a URL usada permanece exatamente a fornecida pelo cliente.

Safari/iOS e dispositivos físicos continuam sem validação nesta etapa. Não foi executado deploy nem qualquer operação de publicação Git.

## Publicação das alterações do cliente autorizada

O usuário autorizou commit, push, PR, CI e merge na main após avaliar os ajustes acima. As anotações anteriores de ausência de publicação descrevem a etapa de implementação local.

DNS/hosting do domínio informado, confirmação de HTTPS/redirecionamento e Safari/iOS continuam documentados como pendências. A integração preserva o workflow de sincronização já existente na main e acrescenta a conferência do sitemap ao CI de produção.
