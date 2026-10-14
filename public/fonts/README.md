# Fontes

Fontes locais em WOFF2, com font-display: swap. O subset latino inclui os acentos usados na copy em português. Sem requisições ao Google Fonts durante a navegação.

- Monoton: lettering geométrico de múltiplas linhas no hero e no encerramento. Fonte original e licença: https://github.com/google/fonts/tree/main/ofl/monoton
- Anton: títulos condensados e rótulos do player. Fonte original e licença: https://github.com/google/fonts/tree/main/ofl/anton
- Arimo: texto corrido, controles e menções textuais à marca (RadioName em peso 700). Fonte original e licença: https://github.com/google/fonts/tree/main/ofl/arimo

WOFF2 oficiais distribuídos via fonts.gstatic.com; licenças SIL OFL preservadas em Monoton-OFL.txt, Anton-OFL.txt e Arimo-OFL.txt.

Arimo usa dois WOFF2 estáticos latinos, pesos 400 e 700, sem `local()` ou dependência de fontes instaladas. Obtidos em 14/10/2026 via https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap, com user agent Chrome 60 para solicitar instâncias estáticas oficiais. O subset latino cobre a copy em português. Os bytes oficiais foram preservados sem conversão. Arquivos separados evitam a diferença visual de peso observada no teste WebKit com a variante variável.

- Peso 400: https://fonts.gstatic.com/s/arimo/v36/P5sfzZCDf9_T_3cV7NCUECyoxNk37cxcABrB.woff2
- Peso 700: https://fonts.gstatic.com/s/arimo/v36/P5sfzZCDf9_T_3cV7NCUECyoxNk3CstcABrB.woff2
