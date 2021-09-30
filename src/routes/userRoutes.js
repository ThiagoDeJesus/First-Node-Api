import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// As duas rotas abaixo não deveriam existir / Criados apenas para entender o CRUD
// router.get('/', loginRequired, UserController.index);
// router.get('/:id', UserController.show);

router.post('/', UserController.create);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
  Métodos comuns dos controllers

  index -> lista todos os usuários -> GET
  store/create -> cria um novo usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT
*/
