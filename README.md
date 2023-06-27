# Tudo em ordem

Este é um projeto para demonstrar minhas habilidades em desenvolvimento web, mais especificamente no desenvolvimento de um site de anotações utilizando as seguintes tecnologias: Laravel (backend), ReactJS (frontend), MySQL (banco de dados) e Docker (contêineres).

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes itens instalados em seu ambiente de desenvolvimento:

[Git](https://git-scm.com/)
[Docker](https://www.docker.com/)

## Clonando o repositório

Abra o terminal na pasta onde deseja clonar o repositório, em seguida execute o seguinte comando no terminal:

`git clone https://github.com/Guaxininho/Tudo_em_ordem.git`

Após a conclusão do processo, acesse o diretório do projeto:

`cd Tudo_em_ordem`


## Configurando o ambiente

Para configurar o ambiente de desenvolvimento, usaremos o Docker. Certifique-se de ter o Docker instalado e em execução em sua máquina.
### Instalando as dependências do frontend

Execute o seguinte comando para instalar as dependências do frontend (ReactJS):

`docker compose run --rm frontend npm install`


### Iniciando o ambiente

Após a instalação das dependências, execute o seguinte comando para iniciar o ambiente completo (backend, frontend e banco de dados):

`docker compose up`


Aguarde até que todos os contêineres sejam iniciados. Isso pode levar alguns segundos.

## Acessando o site

Após o ambiente estar completamente iniciado, você pode acessar o site através do seguinte endereço no seu navegador:

[http://localhost:3000/](http://localhost:3000/)


## Considerações finais

É possível que o container possa cair na primeira vez devido ao race condition. Caso isso ocorra basta rodar o container de novo e tudo funcionará normalmente.
Sinta-se à vontade para explorar o código-fonte, fornecer feedback ou fazer perguntas. 
Caso tenha alguma dúvida ou encontre algum problema ao configurar o ambiente, não hesite em entrar em contato comigo.


