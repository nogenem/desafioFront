# Desafio Front-End da Desbravador Software

**Proposta:**  
Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios mais populares de um determinado usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

**API**: [https://developer.github.com/v3/](https://developer.github.com/v3/)

### **Requisitos** ###

* Eu, como usuário, desejo buscar por um usuário do GitHub;
* Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
* Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;
* Eu, como usuário, desejo poder alterar a ordem da listagem de repositórios;
* Eu, como usuário, desejo ver uma página com os detalhes de um repositório (nome, descrição, ,número de estrelas, linguagem e um link externo para a página do repositório no GitHub), que pode ser clicado na listagem dos repositórios;

### **Definição de Pronto** ###

* O layout deve ser responsivo para dispositivos com a resolução no mínimo de 320 x 480;
* O layout deve seguir padrões Bootstrap.
* Tudo bem, até pode usar jquery. Se você não quiser usar (bônus, preferimos Fetch API)
* É obrigatório o uso de rotas.
* Não utilizar frameworks.

### **Critérios de Avaliação** ###

* Organização do projeto: Avalia a estrutura do projeto, documentação e uso de controle de versão;
* Inovação tecnológica: Avalia o uso de tecnologias mais recentes, desde que estáveis;
* Coerência: Avalia se os requisitos foram atendidos;
* Boas práticas: Avalia se o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização;


### **Observação** ###
A performance e a adequação dos recursos serão considerados durante o processo de avaliação. Alem disso, a avaliação ocorrerá em todos os componentes do projeto (JavaScript, HTML e CSS).

As APIs a serem consumidas são:
* Detalhes de um usuário: [https://api.github.com/users/{username}](https://api.github.com/users/{username})
* Repositórios de um usuário: [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)
* Detalhes de um repositório: [https://api.github.com/repos/{full_name}](https://api.github.com/repos/{full_name})

### **Processo de submissão** ###

O desafio deve ser entregue pelo [GitHub](http://github.com/). A aplicação deve estar hospedada (bônus) ([Heroku](https://www.heroku.com/), [Firebase](https://www.firebase.com/), [Plunker](https://plnkr.co/), [Surge](http://surge.sh/), etc) As URLs deve ser enviada por email.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!
