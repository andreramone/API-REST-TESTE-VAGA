import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          validate: {
            len: {
              args: [3, 50],
              msg: 'Campo nome deve ter entre 3 e 50 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          unique: {
            msg: 'Email já existe',
          },
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },
        telefone: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}
