import { Router } from 'express';
import { validateLoginInput } from '../middlewares/validateLoginInput';
import { createUser, login } from '../controllers/auth.controllers';
import { validateNewUserInput } from '../middlewares/validateNewUserInput';

const router: Router = Router();

router.post('/auth/login', validateLoginInput, login);
router.post('/auth/create-user', validateNewUserInput, createUser);

export default router;
