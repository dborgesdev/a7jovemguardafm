# A7 Jovem Guarda FM — Especificação V1

## Status e fontes
Projeto de landing page institucional. Repositório: https://github.com/dborgesdev/a7jovemguardafm
Branch de implementação: feat/v1-site. Referência de experiência: https://github.com/dborgesdev/geracaovinilfm — analisar especialmente HeroSection, PlayerSection e PlayerProvider; não copiar estética dark nem boilerplate.
Materiais originais fornecidos pelo cliente: capa da rádio (vermelho, vinil e logotipo) e captura do aplicativo. Caso os arquivos binários ainda não estejam no repositório, SOLICITAR os assets originais ao operador; não substituir logo por marca inventada.

## Dados confirmados
Nome: A7 Jovem Guarda FM
Slogan: A Rádio da sua Vida
Frase: Do Brasil para o Mundo
Transmissão: 24 horas no ar, anunciada em alta definição (não inventar bitrate).
Stream DIRETO: https://s04.svrdedicado.org:7150/stream
Embed externo de referência/fallback: https://player.svrdedicado.org/player-topo-html5/7150/000000
Aplicativo: https://player.svrdedicado.org/player-app-multi-plataforma/7150
Instagram: https://www.instagram.com/a7jovemguardafmoficial/
Crédito: Desenvolvido por Douglas Borges - Smart Local — https://smartlocal.com.br
Domínio oficial: PENDENTE; não inventar canonical.
Proibido mencionar músicas, artistas e álbuns específicos. Não inventar endereço, telefone, WhatsApp, programação ou equipe.

## Objetivo e estrutura
Uma única página com header, hero, player, benefícios, conceito, alcance, aplicativo, Instagram, CTA final e footer.
Âncoras: #inicio, #ao-vivo, #a-radio, #aplicativo, #instagram.
Conversão primária: ouvir a rádio; secundárias: aplicativo e Instagram.

## Copy final por seção
Header: Início | Ao Vivo | A Rádio | Aplicativo | Instagram. CTA: Ouvir agora.
Hero eyebrow: NO AR • 24 HORAS POR DIA
Hero H1: A Rádio da sua Vida.
Hero apoio: Reviva a atmosfera da Jovem Guarda em uma experiência que atravessa gerações. Uma rádio feita para acompanhar seus melhores momentos, onde você estiver.
Hero CTAs: Ouvir agora | Conheça a rádio.
Frase visual: Do Brasil para o Mundo.
Player eyebrow: TRANSMISSÃO AO VIVO
Player H2: Dê o play. A viagem começa.
Player apoio: Toda a nostalgia de uma época inesquecível, com a praticidade e a qualidade da transmissão digital.
Player estados: Pronto para ouvir | Conectando... | Reproduzindo ao vivo | Não foi possível iniciar a transmissão. Tente novamente.
Player controles: Ouvir rádio | Pausar rádio | Volume.
Benefícios:
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
App CTA: Acessar aplicativo.
Instagram H2: A nostalgia fica ainda melhor quando é compartilhada.
Instagram corpo: Acompanhe a A7 Jovem Guarda FM no Instagram e fique mais perto da rádio.
Instagram CTA: Seguir no Instagram.
CTA final H2: A Rádio da sua Vida.
CTA final apoio: Do Brasil para o Mundo. 24 horas no ar.
CTA final botão: Ouvir agora.
Footer: A7 Jovem Guarda FM | A Rádio da sua Vida | Do Brasil para o Mundo | Desenvolvido por Douglas Borges - Smart Local.

## Direção visual
Jovem Guarda anos 60, atmosfera alegre e nostálgica, contemporânea na usabilidade. NÃO criar dark mode ou site predominantemente escuro. Predominância branco/creme; vermelho #ED0806, preto #171717, creme #EFEDE7, prata #C4C4C4 (tokens iniciais, conferir logo). Tipografia display forte e sans legível. Discos, círculos concêntricos, diagonais, elementos mod e textura discreta. Não copiar a composição da Geração Vinil.
Vinil central com selo vermelho inspirado na marca; apenas disco gira. Logo completo legível e imóvel. Animação suave e com prefers-reduced-motion.

## Player
HTMLAudioElement com src=https://s04.svrdedicado.org:7150/stream, preload=none, sem autoplay, sem polling, sem metadados, sem proxy/API e sem iframe como UI principal.
Clique do usuário chama play(); somente evento real 'playing' inicia animação; 'pause', 'ended', 'error' interrompem; 'waiting' mostra buffering. Tratar erro e reconexão manual; um único audio element e controle de volume. Testar reprodução real; não simular estado.
Embed externo somente como fallback explícito se stream direto falhar por incompatibilidade; não alegar sincronização com iframe.

## Assets
Marca real e screenshot de app fornecidos pelo cliente, disponíveis no pacote de briefing fora do GitHub. Integrar os arquivos binários reais assim que disponíveis. Não redesenhar logo, não gerar falso print de app.
Slots: logo transparente fiel, favicon derivado do símbolo real, vinil animável, ilustração/asset retrô de conceito, seção alcance, mockup usando screenshot real, OG 1200x630. Imagens ilustrativas não representam instalações/equipe reais. Otimizar WebP e tamanhos responsivos.
Se os binários estiverem ausentes, não substituir por placeholder genérico: reportar pendência e continuar estrutura/copy.

## Stack e deploy
React + TypeScript + Vite SPA + Tailwind CSS, pnpm e pnpm-lock.yaml. Componentes .tsx, configuração centralizada. Sem TanStack/SSR, APIs ou bibliotecas sem necessidade.
Deploy Vercel static, build pnpm build, output dist; sem runtime server. Não inventar domínio; canonical/sitemap definitivos após domínio informado.
SEO: title 'A7 Jovem Guarda FM | A Rádio da sua Vida'; description 'Ouça a A7 Jovem Guarda FM ao vivo, 24 horas por dia, com transmissão em alta definição. A Rádio da sua Vida, do Brasil para o Mundo.' OG/Twitter, favicon, robots, JSON-LD RadioStation apenas com dados confirmados.
Acessibilidade: um H1, semântica, alt, labels, teclado/foco, contraste, reduced motion. Responsividade: 320,375,768,1024,1440.
Critérios: V1 completa, player real funcional, disco sincronizado, assets fiéis, CTAs, SEO, mobile/desktop, typecheck/lint/build e output verificados. Não fazer commit, push ou merge da implementação sem autorização.
