import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.create);

export default router;

/*
  Métodos comuns dos controllers

  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT
*/