import dotenv from 'dotenv';
import express from 'express';

import auth_routes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8086;

app.use(express.json());

app.use(auth_routes);

app.listen(PORT, () => {});
