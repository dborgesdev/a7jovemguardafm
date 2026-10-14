# AGENTS — A7 Jovem Guarda FM

Leia `docs/project.md` integralmente antes de implementar.
O documento é a fonte de verdade de fatos, copy, UX, SEO, arquitetura e direção visual.
Não invente contatos, artistas, faixas, bitrate, URLs de streaming ou domínio.
Preserve a marca real; não redesenhe nem substitua por logo gerado.
A implementação deve PARTIR da main atual; crie branch nova somente para o código da V1, sem reaproveitar feat/v1-site. Não copiar boilerplate da Geração Vinil.
Stack: React + TypeScript + Vite + Tailwind; pnpm, lockfile versionado.
Player deve refletir estado REAL do áudio; nunca simule streaming ou metadados.
Os assets já estão versionados em `assets/` na main. NÃO modificar, sobrescrever, excluir, regenerar ou renomear nenhum arquivo dessa pasta. Copie-os para `public/assets/` apenas se necessário à aplicação; não solicite novos assets e não gere imagens substitutas. `visual-direction.webp` e `hero-visual-reference.png` são referências, não backgrounds de produção.
Priorize acessibilidade, responsividade, performance, SEO e deploy estático Vercel.
Valide typecheck, lint, build, player, links, layout 320–1440 e output `dist`.
Pode criar branch local para implementar, mas não faça commit, push, PR ou merge da V1 sem solicitação explícita.
Reporte pendências reais e verificações efetivamente executadas.
