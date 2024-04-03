# IASD_JN
Repositório do portal de informações da IASD de Jardim Novo

## Tecnologias utilizadas

- [React](https://react.dev)
- [React Router](https://reactrouter.com/en/main)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev)
- [Axios](https://axios-http.com)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Cors](https://www.npmjs.com/package/cors)
- [Firebase](firebase.google.com)
- [Nodemon(apenas em desenvolvimento)](https://nodemon.io)

## Funcionalidades
Este portal de Notícias ofere ou oferecerá:

- [x] Autenticação de usuários
- [x] Conteúdos dinámicos do Youtube
- [ ] CRUD diretamente do servidor
- [ ] Administração dinâmica dos conteúdos

Ainda a fazer

- [ ] Melhorar a parte visual
- [ ] Arrumar o background
- [ ] Métodos e funcionalidades de CRUD


## Instalação

Para rodar a aplicação localmente siga os seguintes passos:

### Back-End

```bash
# Clone o repositório:
git clone https://github.com/Pato07brn/IASD_JN

# Acesse a pasta do projeto no terminal/cmd
$ cd API

# Instale as dependências
$ npm install

# Vá até a pagina <https://firebase.google.com> e configure sua plataforma
# Após configurar vá até <https://console.firebase.google.com/u/1/project/NOME_DO_SEU_PROJETO/settings/serviceaccounts/adminsdk> e gere uma chave privada
# Troque as chaves de configuração no arquivo API/src/config/firebase.config.js pelas que o seu projeto gerou ou crie um aquivo .env e coloque as chaves privadas para a mesma referência no arquivo API/src/config/firebase.config.j

# Execute a aplicação em modo de desenvolvimento
$ npm run test
# Com o nodemon toda alteração no código automaticamente reinicia o servidor

# O servidor inciará na porta:7777 - acesse <http://localhost:7777>
```
### Front-End
1. Navegue até o repositório:

```bash
cd front
```

2. Instale as dependências:

```
npm install
```
3. Troque no aquivo src/firebase/index.js pelas configurações de sua plataforma Firebase

4. Coloque no arquivo src/services/api.js em 'baseURL:' para http://localhost:7777

5. Inicie a aplicação em modo de desenvolvimento:
```bash
npm run dev
```
A aplicação irá rodar na porta http://localhost:8080
