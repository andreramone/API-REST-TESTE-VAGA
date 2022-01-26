module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users', // tabela que quero inserir o seed
    [
      {
        nome: 'Teste1',
        email: 'teste1@teste.com',
        telefone: '99334258',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Teste2',
        email: 'teste2@teste.com',
        telefone: '99334258',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Teste3',
        email: 'teste3@teste.com',
        telefone: '99334258',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
