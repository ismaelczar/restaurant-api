# Restaurante API

## 📖 Sobre

API RESTful para gerenciar **pratos** e **pedidos** de um restaurante.  
O projeto utiliza **Node.js**, **TypeScript** e **Mongoose** para interagir com um banco de dados **MongoDB**.

## ✨ Funcionalidades

- **Gerenciamento de Pratos**: CRUD completo para os pratos do cardápio.
- **Gerenciamento de Pedidos**: Criação e consulta de pedidos.

## 🛠️ Tecnologias Utilizadas

A seguir, as principais tecnologias e ferramentas utilizadas no desenvolvimento da API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/) (para MongoDB)
- [ESLint](https://eslint.org/) (para linting de código)

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (v18.x ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Uma instância do [MongoDB](https://www.mongodb.com/) rodando (localmente ou em um serviço como o MongoDB Atlas).

### 1. Clonando o Repositório

```bash
git clone https://github.com/ismaelczar/restaurant-api.git
cd restaurant-api
```

### 2. Instalando as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento com recarregamento automático:

```bash
npm run dev
```

Para compilar o projeto e iniciar em modo de produção:

```bash
# 1. Compilar o código TypeScript
npm run build

# 2. Iniciar o servidor
npm start
```

## ⚙️ Scripts Disponíveis

- `npm start`: Inicia o servidor em produção (requer build prévio).
- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## 📝 API Endpoints (Exemplo)

Abaixo estão alguns exemplos de endpoints que sua API pode ter. Adapte conforme a sua implementação.

## Produtos

| Método   | Rota        | Descrição                        |
| -------- | ----------- | -------------------------------- |
| GET      | /products   | Lista todos os produtos.         |
| POST     | /products   | Cria um novo produto (com imagem). |

## Categorias

| Método   | Rota                        | Descrição                                 |
| -------- | --------------------------- | ----------------------------------------- |
| GET      | /categories                 | Lista todas as categorias.                |
| GET      | /categories/:id/products    | Lista todos os produtos de uma categoria.|
| POST     | /categories                 | Cria uma nova categoria.                  |

## Pedidos

| Método   | Rota           | Descrição                     |
| -------- | -------------- | ----------------------------- |
| GET      | /orders        | Lista todos os pedidos.       |
| POST     | /orders        | Cria um novo pedido.          |
| PUT      | /orders/:id    | Altera o status de um pedido. |
| DELETE   | /orders/:id    | Deleta um pedido.             |

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
