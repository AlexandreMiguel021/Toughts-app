<img src="https://i.ibb.co/1TQTrtv/Screenshot-1.png">

---

## **📑 Sobre**

<p>O toughts é um app onde você pode estar se registrando para compartilhar seus pensamentos e ver os pensamentos compartilhados de outros usuários.<br>

- Na construção do APP foi utilizado a arquitura MVC para melhor organização e separação entre as camadas de visualização e regras de negócio.<br>

---

## **💻 Demonstração**

<br>
  
| Lista de toughts  | Criando toughts |
|----------|----------|
| <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781977953468467/toughts.png"> |  <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781978200903761/create-toughts.png">

| Dashboard                                                                                                            | Dashboard                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781978410623026/dashboard.png"> | <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781978590982204/empty-dashboard.png"> |

| Filtrando Toughts                                                                                                         | Registro de usuário                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781978955907122/filter-toughts.png"> | <img width="400px" src="https://cdn.discordapp.com/attachments/922557394419056671/950781979689881660/register.png"> |

### 📲 _Design responsivo_

|                                                                                                                             |                                                                                                                         |                                                                                                                            |                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <img width="200px" src="https://cdn.discordapp.com/attachments/922557394419056671/950782007212933160/mobile-dashboard.png"> | <img width="200px" src="https://cdn.discordapp.com/attachments/922557394419056671/950782007376490537/mobile-login.png"> | <img width="200px" src="https://cdn.discordapp.com/attachments/922557394419056671/950782007598776350/mobile-register.png"> | <img width="200px" src="https://cdn.discordapp.com/attachments/922557394419056671/950782008009822298/mobile-toughts.png"> |

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)

## 🗒️ Libs

- **bcryptjs** para criptografar e descriptografar a senha do usuário.

- **connect-flash & express-flash** para "flash messages"

- **cookie-parser, cookie-session & express-session** para manter uma sessão na máquina do usuário, afim de se manter conectado e autenticado no app.

---

## ⚙️ Funcionalidades

- Registro e Login
- Criar um pensamento
- Editar e excluir um pensamento
- Listar pensamentos de todos usuários
- filtrar e buscar um pensamento específico

---

## Pré-requesitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[GIT](https://git-scm.com/), [node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/).

Além disto, é bom ter um editor para trabalhar com o código como [VScode](https://code.visualstudio.com/);

## 🎲 Rodando a aplicação

_Em seu banco de dados MySQL, é preciso criar um schema com o nome toughts onde será criada a tabela posteriormente_

```bash
# clone este repositório
$ git clone

# acesse a pasta do projeto no terminal
$ cd toughts

# instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

```

---

Desenvolvido 💜 por Alexandre Miguel [See my LinkedIn](https://www.linkedin.com/in/alexandre-miguel-6969b6209/)
