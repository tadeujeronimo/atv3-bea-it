# atv3-bea-it

Atividade 3 do curso de Back-end Avançado da iTalents, continuando o marketplace iniciado em aula.

## Objetivo da atividade

- Implementar o módulo Carts com endpoints de CRUD
- Implementar PATCH de imagem em Products com Multer
- Aplicar tratativas de erro personalizadas nos services
- Remover blocos try/catch dos controllers e centralizar o tratamento no middleware de erro

Para validar os fluxos da API, foi utilizado o [Hoppscotch](https://docs.hoppscotch.io) como alternativa ao Thunder Client, devido às limitações da versão gratuita.

## Tecnologias obrigatórias da atividade

- Linguagens: TypeScript e MongoDB
- Bibliotecas: Mongoose, Jest, Supertest, Joi, Axios, JWT, Multer
- Paradigma: Programação orientada a objetos

Status neste projeto:

- Em uso: TypeScript, MongoDB, Mongoose, Joi, JWT, Multer, TSyringe, POO
- Ainda não configurado neste repositório: Jest, Supertest, Axios

## Requisitos funcionais atendidos

### Auth

- POST /auth/signin

### Users

- POST /users
- GET /users
- GET /users/:id
- PUT /users/:id
- DELETE /users/:id
- POST /users/add-address
- DELETE /users/remove-address/:idAddress
- POST /users/add-favorite-product/:productId
- DELETE /users/remove-favorite-product/:productId
- PATCH /users/avatar
- GET /users/avatar/:id

### Categories

- POST /categories
- GET /categories
- GET /categories/:id
- PUT /categories/:id
- DELETE /categories/:id

### Products

- POST /products
- GET /products
- GET /products/:id
- PATCH /products/:id
- DELETE /products/:id
- POST /products/add-category/:categoryId/:productId
- DELETE /products/remove-category/:categoryId/:productId

Observação: o requisito de PATCH com Multer foi atendido em Products e Users, com upload de arquivo nas rotas de atualização de imagem/avatar.

### Carts

- POST /carts
- GET /carts
- GET /carts/:id
- PATCH /carts/:id
- DELETE /carts/:id

### Orders

- POST /orders
- GET /orders
- GET /orders/:id
- PATCH /orders/:id
- DELETE /orders/:id

## Tratamento de erros

As regras de erro foram centralizadas com classes personalizadas em [src/helpers/errors/apiErrors.ts](src/helpers/errors/apiErrors.ts), incluindo:

- BadRequestError
- NotFoundError
- UnauthorizedError
- ConflictError
- DatabaseError

Os services lançam erros específicos e os controllers seguem sem try/catch, deixando a resposta padrão para o middleware global de erro.

## Testes de endpoints

Conforme orientação da atividade, os endpoints foram validados em cliente HTTP. Neste projeto, foi utilizada a collection do Hoppscotch:

- [Hoppscotch/hoppscotch-collection_Marketing-Place.json](Hoppscotch/hoppscotch-collection_Marketing-Place.json)
- [Hoppscotch/hoppscotch-environment_Marketing-Place.json](Hoppscotch/hoppscotch-environment_Marketing-Place.json)

## Módulos ativos

- Auth
- Users
- Categories
- Products
- Carts
- Orders

## Ambiente

- Node.js 18+
- npm 9+
- MongoDB em execução (local ou remoto)

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Script atual:

- tsx watch src/server.ts

Base URL local padrão:

- http://localhost:5000

## Autenticação

As rotas protegidas exigem o header:

```http
Authorization: Bearer <token>
```

Token obtido em:

- POST /auth/signin
