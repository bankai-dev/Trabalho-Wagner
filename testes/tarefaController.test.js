const request = require('supertest');
const app = require('../index'); // Verifique o caminho correto para o seu aplicativo
const Tarefa = require('../model/tarefaModel');

describe('Testando endpoints de tarefa', () => {
  beforeAll(async () => {
    // Aqui você pode adicionar código de setup, como inicialização do banco de dados
  });

  it('Deve criar uma tarefa com sucesso', async () => {
    const response = await request(app)
      .post('/tarefas')
      .send({
        titulo: 'Tarefa Teste',
        descricao: 'Descrição da tarefa de teste'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tarefa criada com sucesso!');
  });

  it('Deve listar tarefas com sucesso', async () => {
    const response = await request(app).get('/tarefas');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve atualizar uma tarefa com sucesso', async () => {
    const tarefas = await Tarefa.findAll();
    const tarefa = tarefas[0]; // Pegar a primeira tarefa da lista
    const response = await request(app)
      .put(`/tarefas/${tarefa.id_tarefa}`)
      .send({
        titulo: 'Novo Título',
        descricao: 'Nova descrição da tarefa'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tarefa atualizada com sucesso!');
  });

  it('Deve excluir uma tarefa com sucesso', async () => {
    const tarefas = await Tarefa.findAll();
    const tarefa = tarefas[0]; // Pegar a primeira tarefa da lista
    const response = await request(app).delete(`/tarefas/${tarefa.id_tarefa}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tarefa excluída com sucesso!');
  });
});
