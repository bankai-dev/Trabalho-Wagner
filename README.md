# Trabalho Wagner - Programação Avançada para Web
Eduardo Kuster Antunes e Alexandre Maia Filho

NodeJS Application
# Projeto Node.js de Gerenciamento de Tarefas e Usuários

Este é um projeto Node.js que oferece funcionalidades para gerenciar tarefas e usuários. Ele utiliza o Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados e oferece endpoints HTTP para criar, listar, atualizar e excluir tarefas e usuários.

## Pré-requisitos

- Node.js instalado na sua máquina.
- Um banco de dados SQLite configurado e acessível. Você pode ajustar as configurações de conexão no arquivo `db/db.js`.
- Recomendo adicionar na raiz do projeto um arquivo mercado.sqlite
- Dependências Node.js instaladas. Você pode instalá-las com o seguinte comando:
  
  ```bash
  npm install
  npm install express
  npm install sequelize
  node index.js (Para iniciar a aplicação)
  
# Endpoints da API
## Tarefas
### POST /tarefas - Cria uma nova tarefa:
{
  "titulo": "Título da Tarefa",
  "descricao": "Descrição da Tarefa"
}
### GET /tarefas - Lista todas as tarefas cadastradas.

### PUT /tarefas/:id - Atualiza uma tarefa existente:
{
  "titulo": "Novo Título",
  "descricao": "Nova Descrição"
}
### DELETE /tarefas/:id - Exclui uma tarefa pelo ID.

## Usuários

### POST /usuarios - Cria um novo usuário:

{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "senha": "senha_segura"
}
### GET /usuarios - Lista todos os usuários cadastrados.

### PUT /usuarios/:id - Atualiza um usuário existente:

{
  "nome": "Novo Nome",
  "email": "novo_email@exemplo.com",
  "senha": "nova_senha_segura"
}
### DELETE /usuarios/:id - Exclui um usuário pelo ID.
