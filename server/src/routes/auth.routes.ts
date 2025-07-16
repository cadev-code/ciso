import { Router } from 'express';
import { validateLoginInput } from '../middlewares/validateLoginInput';
import { login } from '../controllers/auth.controllers';

const router: Router = Router();

router.post('/auth/login', validateLoginInput, login);

export default router;
