# Sampi Cookies

Site de apresentação e catálogo da Sampi Cookies, desenvolvido para o projeto final da disciplina Desenvolvimento de Interfaces, com conteúdo fornecido pelas fundadoras da marca.

## Executar localmente

Requer Node.js para o servidor de prévia, sem instalar pacotes. Na pasta do projeto:

```sh
node server.cjs
```

Abra http://localhost:4173. Para encerrar, pressione Ctrl+C no terminal. O site também funciona abrindo `index.html`, mas o servidor é recomendado para a revisão.

## Estrutura

- `index.html`: início, carrossel, catálogo, história da marca, encomendas, contato e rodapé.
- `login.html`: demonstração acadêmica de acesso, sem autenticação real.
- `styles.css`: layout responsivo, temas e estilos de acessibilidade.
- `script.js`: catálogo, busca, abas, carrossel, preferências e validação dos formulários.
- `imagens/`: fotografias fornecidas pela marca.
- `logos/julini/`: seis versões oficiais da logo.
- `renomeacao-imagens.csv`: correspondência entre os nomes originais e descritivos das fotos.
- `server.cjs`: servidor HTTP local de desenvolvimento, limitado ao próprio computador.

## Processo de construção

### Entrevista com as fundadoras

Antes de começar o site, entrevistei as fundadoras da Sampi Cookies por meio de perguntas enviadas por mensagem. Quis conhecer a identidade da marca, os produtos e as informações necessárias para apresentar o negócio aos clientes.

Perguntei sobre a paleta de cores e o motivo da escolha, os produtos oferecidos, os sabores e os preços. Também pedi um texto de apresentação da marca, depoimentos individuais sobre a experiência de empreender e materiais visuais, como logos e fotos dos produtos.

Elas explicaram que escolheram as cores por gostarem delas e por associarem esses tons a doces. As respostas e os materiais recebidos orientaram o catálogo e a identidade visual do site. Decidi preservar o texto original de “Sobre nós”, escrito pelas próprias fundadoras. As fotos e os depoimentos individuais para a página “Quem faz a Sampi” ainda estão sendo aguardados.

### Etapas do desenvolvimento

1. Leitura dos requisitos do trabalho e planejamento das entregas.
2. Entrevista com as fundadoras e levantamento de catálogo, preços, identidade visual e canais de atendimento.
3. Recebimento e conferência das seis versões oficiais da logo.
4. Inspeção e renomeação de 19 fotografias para facilitar sua manutenção.
5. Definição de um layout com cores inspiradas na marca: creme, marrom e coral. Cores de texto e superfície foram adaptadas para legibilidade.
6. Construção das seções com HTML semântico e inclusão integral do texto original de “Sobre nós”.
7. Implementação do CSS responsivo e dos temas claro e escuro.
8. Implementação das interações em JavaScript, sem frameworks ou dependências de execução.
9. Revisão funcional e visual local; registrar os resultados efetivamente verificados no histórico do projeto.
10. Próximas etapas: confirmar dados pendentes, publicar pelo GitHub e registrar o endereço público e capturas finais no relatório.

## Recursos de acessibilidade

Link para pular ao conteúdo, foco visível, rótulos de campos, textos alternativos, navegação das abas por setas/Home/End, carrossel manual com botões identificados, mensagens de resultado, aumento de texto e troca de tema. As preferências de tema e tamanho são armazenadas localmente quando permitido pelo navegador. O layout respeita a preferência por movimento reduzido.

Esses recursos não constituem certificação WCAG. A avaliação documentada de contraste, teclado, zoom e demais critérios ainda deve integrar a revisão final.

## Verificação da primeira versão

Em 22/11/2026, foram verificados no navegador:

- Busca por produto e mensagem de nenhum resultado; alternância entre as três categorias.
- Troca manual das imagens do carrossel.
- Preenchimento da mensagem a partir de um produto e preparação do contato sem envio.
- Troca de tema, aumento de texto e persistência dessas preferências entre páginas.
- Alternância das abas por seta do teclado e fluxo de login demonstrativo com dados fictícios.
- Ausência de rolagem horizontal nas larguras de 1040, 390 e 320 pixels, incluindo texto aumentado em 320 pixels.
- Conferência visual da tela inicial em computador e celular; nenhum erro de console observado durante os fluxos testados.

Também passaram a verificação de sintaxe do JavaScript, os caminhos locais declarados no HTML e a resposta HTTP 200 da página inicial. As principais combinações de texto e fundo foram calculadas: texto principal claro 11,53:1; texto secundário claro 6,07:1; texto secundário sobre creme 5,63:1; marrom sobre creme 6,65:1; texto sobre coral 5,29:1; texto principal escuro 15,38:1; texto secundário sobre fundo creme do tema escuro 8,66:1; texto sobre a faixa escura 7,99:1.

Essa é uma conferência inicial, não uma auditoria completa. Ainda faltam revisão de todas as seções em diferentes telas, zoom do navegador, tecnologia assistiva e conferência final do conteúdo com a marca.

### Conferência no Opera GX

Em 22/11/2026, a prévia local também foi conferida no Inspecionar Elementos do Opera GX, em 320, 393, 768 e 1261 pixels de largura. Foram exercitados busca por Nutella, categorias de cookies, minis e cestas, navegação para contato a partir de um produto, preparação da mensagem e conferência do link gerado para o WhatsApp, troca de tema, aumento de texto, carrossel e login demonstrativo. Nenhuma mensagem foi enviada ao WhatsApp.

A conferência identificou fotos de cartões excessivamente altas em telas estreitas; a altura passou a acompanhar a proporção definida no CSS. As imagens estáticas com carregamento adiado receberam dimensões explícitas para ajudar a reservar espaço no layout. O console não apresentou erros nos fluxos observados; permaneceu um aviso informativo sobre dimensões de imagem com carregamento adiado. A emulação não substitui testes em aparelhos reais nem uma auditoria completa de acessibilidade.

## Contato e dados pendentes

O formulário prepara uma mensagem no próprio navegador. Não há envio, banco de dados ou armazenamento dos campos. O WhatsApp de encomendas é +55 (61) 98212-3090, configurado em `SAMPI_WHATSAPP` em `script.js`. O usuário pode abrir a mensagem no WhatsApp e confirmar o envio lá. Nunca colocar credenciais neste arquivo.

- Número de WhatsApp recebido e configurado; conferir o atendimento com a marca antes da publicação final.
- Mini cookies de 20 g: até 80 unidades, R$ 3,00 por unidade; a partir de 81 unidades, R$ 3,50 por unidade. Valores confirmados pelo responsável pelo projeto.
- Confirmar pagamento, antecedência, regiões de entrega e retirada. Não publicar essas suposições como regras da marca.
- Solicitar ingredientes completos, alergênicos e conservação. As descrições dos sabores não substituem essas informações.
- Confirmar a correspondência das fotos com cada sabor. Algumas imagens são composições ou ilustrações visuais de recheios; os textos alternativos explicitam isso.

## Login de demonstração

E-mail: `visitante@example.com`. Senha fictícia: `sampi-demo`. Não cria conta, não protege conteúdo, não autentica pessoas e não armazena senhas. O aviso é exibido antes do formulário. Um login de produção exige outro projeto de autenticação.

## GitHub e publicação

Organizei o versionamento no GitHub, com commits que registram as etapas de construção e os ajustes do site. A publicação utiliza o GitHub Pages.

- Repositório: https://github.com/caduavelarr/sampi-cookies
- Site: https://caduavelarr.github.io/sampi-cookies/

## Ferramentas e autoria

Utilizei HTML, CSS e JavaScript no site e Node.js para a prévia local, com apoio do Codex/OpenAI na organização, implementação e revisão. As fundadoras forneceram as logos, as fotos, as informações do catálogo e o texto “Sobre nós”. Recebi as versões das logos a partir do material da marca no Canva.

## Referências

- WCAG, W3C: https://www.w3.org/WAI/standards-guidelines/wcag/
- Heurísticas de usabilidade, Nielsen Norman Group: https://www.nngroup.com/articles/ten-usability-heuristics/

