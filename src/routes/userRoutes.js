import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index); // lista os usuários
router.get('/:id', userController.show); // lista um usuário
router.post('/', userController.store); // criação de usuários
router.put('/', userController.update); // update de usuário
router.delete('/:id', userController.delete); // deleta usuário

export default router;
