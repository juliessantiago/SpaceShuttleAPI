<h1 align="center">Space Shuttle API</h1>
<p align="center">API para controle de equipes e projetos -- teste estágio Nave</p>
<p>
<img src="https://img.shields.io/static/v1?label=Author&message=JulieSantiago&color=ff69b4&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=informational&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=MadeWith&message=Javascript&color=yellow&style=for-the-badge"/>
</p>
<h3>Conteúdo</h3>
<p> 
<a href="#func">Funcionalidades</a>
<a href="#prereq">Pré-requisitos</a> ||
<a href="#app">Rodando a aplicação</a>||
<a href="#test">Testando rotas</a>||
<a href="#tecs">Tecnologias</a> ||
<a href="#lic">Licença</a> ||
<a href="#autor">Autor</a>
</p>


<h4 align="center"> 
	:wrench: :hammer: Status:  em andamento
</h4>

<h3 id="func"> Funcionalidades </h3>
<ol>
<ul>[x] Cadastro de membros de equipes (Navers)</ul>
<ul>[x] Listagem de membros de equipes</ul>
<ul>[x] Cadastro de projetos</ul>
<ul>[x] Listagem de projetos</ul>
<ul>[ ] Cadastro de equipes</ul>
<ul>[ ] Autenticação</ul>
<ul>[ ] Agendamento e controle de datas de projetos </ul>
</ol>

<h3 id="prereq">Pré-requisitos</h3>

Você precisará instalar as seguintes ferramentas: 
<p>-> ➡️NodeJS </p>
<p>-> ➡️MongoDB </p>
<p>-> ➡️Mongoose </p>

<p>Entry Point: index.js</p>
<p>Porta do servidor: 2000</p>

<h3 id="app">Para rodar a aplicação: </h3>
<ol>
  <ul>Clone ou baixe esse repositório para sua máquina</ul>
  <ul>Abra a pasta do projeto</ul>
  <ul>Instale as dependências do projeto - nmp install</ul>
  <ul>Através do terminal, rode a aplicação através do Node:<h5> node index.js</h5> ou se você utilizar o Nodemon: <h5>nodemon index.js</h5></ul>
</ol>

Agora, basta acessar: http://localhost:2000/

<h3 id="test">Testando as rotas</h3>
Como sugestão, você pode utilizar a plataforma do Insomnia (Cliente de API) para testar se está tudo ok. 
<p><a href="https://insomnia.rest/download">Download</a></p>

<p>Após download e instalação, você pode começar criando a primeira requisição da API: </p>
<h1 align="center">
  <img width="30%" src="criando_request.PNG" />
</h1>
<p>Após criar a request com o nome desejado, você irá acessar o painel superior, onde deve informar a URL da requisição, de acordo com 
a rota definida na API. Atente-se ao tipo de requisição (GET, POST, PUT...). Exemplo: localhost:2000/navers/index</p>
<h1 align="center">
  <img width="40%" src="criando_url.PNG" />
</h1>
<p>Agora que a URL foi criada, você pode enviar a requisição. No caso de inserções de dados, você poderá fazer isso no painel abaixo
da URL, definindo o tipo de dado que será usado. No caso desta API, usaremos JSON: </p>
<h1 align="center">
  <img width="40%" src="inserindo_dados.PNG" />
</h1>
<p>Depois de clicar em SEND, você pode conferir o retorno e o status da requisição no painel à direita</p>
<h1 align="center">
  <img width="30%" src="resposta_requisicao.PNG" />
</h1>


<h3 id="tecs">Ferramentas e tecnologias</h3>
<ol>
<p>Obrigatório</p>
  <ul>NodeJS</ul>
  <ul>Express</ul>
  <ul>MongoDB</ul>
  <ul>Mongoose</ul>
 <p>Opcional</p>
  <ul>Insomnia OU Postman</ul>
  <ul>Nodemon</ul>
</ol>

<h3 id="lic">Licença</h3>
  MIT License (Acesse o arquivo LICENSE) 
<h3 id="autor">Autor</h3>
<h6 color:red>Julie Santiago</h6>
====================================================================
<p><h5>➡️CodeSandbox</h5></p>
<a href="https://codesandbox.io/s/teste-estagio-template-forked-qvdtj?file=/index.html">Exercícios de lógica</a>


