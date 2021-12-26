# API Start Project

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->
<!---
![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)
--->


> Uma Api simples para dar start em algum projeto futuro. Ela contem:
> - Autenticação com JWT(c/Refresh Token).
> - ORM Sequelize
> - DB Postgres

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e a próxima atualização sera voltada na seguinte tarefa:

- [ ] ACL

## 🗂 Estrutura de pastas

```
src
│   app.js          # Classe app
│   server.js       # Server para iniciar o app
└───app
  └───controllers   # Funções da controllers do express route
  └───models        # Modelos do banco de dados
  └───middlewares   # Mediadores de rotas e ações
└───config          # Configuração das variaveis de ambiente
└───database        # Configuração do ORM
└───services        # Serviços de dependências e Regras de negócio
└───routes          # Definição de rotas express
```

## 🚀 Instalando API Start Project

Para instalar:

```
yarn
```

.ENV com essas variáveis
```
PORT=3333

#SCHOOL
DB_DIALECT='postgres'
DB_HOST='host do banco'
DB_USER='user do banco'
DB_PORT='port do banco (5432)'
DB_PASS='senha do banco'
DB_DATABASE='nome do banco'

#JWT
JWT_KEY='chave secreta do JWT'
```

## ☕ Usando API Start Project

Para usar API Start Project:

```
yarn dev
```

[⬆ Voltar ao topo](#api-start-project)<br>
