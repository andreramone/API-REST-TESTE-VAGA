import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    console.log(req.body);
    const { email } = req.body;

    if (!email) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, 'apiteste', {
      expiresIn: '7d',
    });

    return res.json({
      token,
      user: {
        nome: user.nome,
        id,
        email,
        telefone: user.telefone,
      },
    });
  }
}

export default new TokenController();
