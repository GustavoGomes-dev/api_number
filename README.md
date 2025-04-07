Fatos sobre o Número - React App
Este é um projeto simples em React que consome a API NumbersAPI e exibe fatos sobre um número. Ele faz duas requisições à API para obter dois fatos diferentes sobre o número escolhido: um fato trivia e um fato matemático. Além disso, uma imagem personalizada do número é gerada e exibida na tela.

Funcionalidades
Exibe dois fatos diferentes sobre um número:

Fato trivia: Curiosidade geral sobre o número.

Fato matemático: Informação matemática sobre o número.

Exibe uma imagem personalizada com o número.

Permite ao usuário gerar um número aleatório e obter dois novos fatos e a imagem correspondente.

Tecnologias Utilizadas
React: Biblioteca JavaScript para criar interfaces de usuário.

Axios: Cliente HTTP para fazer requisições à API.

API NumbersAPI: API pública que fornece fatos sobre números.

Imagem Dummy: Serviço para gerar imagens simples com texto.

Como Executar o Projeto
1. Clonando o repositório
Clone este repositório para a sua máquina local.

bash
Copiar
git clone https://github.com/seu-usuario/fatos-sobre-o-numero.git
2. Instalando as dependências
Navegue até o diretório do projeto e instale as dependências usando o npm ou yarn.

bash
Copiar
cd fatos-sobre-o-numero
npm install
Ou, se estiver utilizando o yarn:

bash
Copiar
cd fatos-sobre-o-numero
yarn install
3. Rodando o servidor local
Depois de instalar as dependências, inicie o servidor de desenvolvimento:

bash
Copiar
npm start
Ou, se estiver utilizando o yarn:

bash
Copiar
yarn start
Isso abrirá o aplicativo no navegador, geralmente em http://localhost:3000.

Como Funciona
O aplicativo começa com o número 42 e exibe dois fatos sobre esse número: um fato trivia e um fato matemático.

O usuário pode clicar no botão "Pegar Fato Aleatório" para gerar um número aleatório entre 0 e 999. Quando isso acontece, o número gerado será mostrado, e dois novos fatos (um trivia e um matemático) serão carregados, juntamente com a imagem do número.

O fato trivia é uma curiosidade simples sobre o número.

O fato matemático é uma propriedade matemática do número.

Uma imagem é gerada dinamicamente usando o serviço dummyimage e exibida ao lado dos fatos.
