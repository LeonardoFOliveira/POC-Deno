# POC Deno
Implementação de uma poc com o intuito de aprender o básico sobre o funcionamento do runtime Typescript/Javascript Deno.

## Pré-requisito
Para que rode o projeto sem maiores problemas e com a melhor experiência, é necessário a instalação do Deno e a atenção nos pontos/passos a seguir.

### Instalação Deno

1. Para instalar o Deno na máquina há diversas maneiras, como também varia de acordo com sua máquina. As maneiras mais comuns para os principais sistemas operacionais são:
   - Windows: Executar o comando "iwr https://deno.land/x/install/install.ps1 -useb | iex" no cmd.
   - Mac/Linux: Executar o comando "curl -fsSL https://deno.land/x/install/install.sh | sh" no Shell.

2. É recomendado instalar a extensão oficial do Deno em seu Visual Code.

### Banco de dados (MySQL)

1. Para esta POC foi utilizado o MySQL como Banco de Dados, sendo assim necessário que se tenha o mesmo na máquina.

OBS: É importante que se tenha uma versão abaixo da 8.x.x, pois até o atual momento a biblioteca utilizada para a conexão com o banco MySQL não tem suporte para as versões mais recentes, devido a novo modo de criptografia das senhas para a autenticação utilizada nestas versões. Sendo assim, é necessário utilizar uma versão mais antiga por enquanto.

### Arquivos

Existem diferentes arquivos que podem ser executados nesta POC. Para cada teste e estudo nesta POC foi desenvolvido em arquivos diferentes.
Geralmente eles são executados pelo terminal com a seguinte regra:
  "deno run <regras de liberação> <nome do arquivo>"

#### hello-world.ts

Este é o primeiro que foi criado, tendo como objetivo apresentar um "Hello World!" no console, como de prache em qualquer nova tecnologia aprendida.
Para executar esse arquivo, basta executar no terminal o seguinte comando:
  "deno run hello-world.ts"
 
#### http-server.ts

Este tem como objetivo ser um exemplo de como subir um servidor http.
Para executar esse arquivo, basta executar no terminal o seguinte comando:
  "deno run --allow-net http-server.ts"
  
#### routing.ts

Este tem como objetivo ser um exemplo de como subir a aplicação com o roteamento, com rotas. Utiliza-se a biblioteca "oak", disponibilizada na deno land.
https://deno.land/x/oak@v6.0.1
Para executar esse arquivo, basta executar no terminal o seguinte comando:
  "deno run --allow-net routing.ts"
 
#### mysql.ts

Este tem como objetivo ser um exemplo de como acessar o banco de dados mysql. Utiliza-se a biblioteca "mysql", disponibilizada na deno land.
https://deno.land/x/mysql@v2.4.0
Para executar esse arquivo, basta executar no terminal o seguinte comando:
  "deno run --allow-net mysql.ts"

#### api.ts

Por fim, este tem como objetivo ser um exemplo simplório de construção de API, em que une o que foi realizado nos arquivos anteriores, desde subir o servidor http com roteamento, até o acesso ao banco de dados.
Para executar esse arquivo, basta executar no terminal o seguinte comando:
  "deno run --allow-net api.ts"
  
 ### Considerações
 É interessante observar que não nenhuma dependência sobre as bibliotecas para desenvolver e executar o projeto, pois o Deno não utiliza o NPM para o gerenciamento de pacotes como é feito no Node.js. É referenciado via url, em que as bibliotecas ficam disponibilizadas pelas CNDs.
 
 É válido acessar e ler mais sobre o Deno em seu próprio site, https://deno.land/.
      
