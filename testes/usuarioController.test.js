const request = require('supertest');
const app = require('../index'); // Verifique o caminho correto para o seu aplicativo
const Usuario = require('../model/usuarioModel');

describe('Testando endpoints de usuário', () => {
  beforeAll(async () => {
    // Aqui você pode adicionar código de setup, como inicialização do banco de dados
  });

  it('Deve criar um usuário com sucesso', async () => {
    const response = await request(app)
      .post('/usuarios')
      .send({
        nome: 'Teste',
        email: 'teste@example.com',
        senha: '123456'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário cadastrado com sucesso');
  });

  it('Deve listar usuários com sucesso', async () => {
    const response = await request(app).get('/usuarios');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve atualizar um usuário com sucesso', async () => {
    const usuarios = await Usuario.findAll();
    const usuario = usuarios[0]; // Pegar o primeiro usuário da lista
    const response = await request(app)
      .put(`/usuarios/${usuario.id_usuario}`)
      .send({
        nome: 'Novo Nome',
        email: 'novoemail@example.com',
        senha: 'novasenha'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Cadastro atualizado com sucesso!');
  });

  it('Deve excluir um usuário com sucesso', async () => {
    const usuarios = await Usuario.findAll();
    const usuario = usuarios[0]; // Pegar o primeiro usuário da lista
    const response = await request(app).delete(`/usuarios/${usuario.id_usuario}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário excluído com sucesso');
  });
});
