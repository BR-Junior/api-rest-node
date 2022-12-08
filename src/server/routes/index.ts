import { Router } from 'express';
// import { StatusCodes } from 'http-status-codes';
import { CidadesControllers } from '../controllers';



const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});

router.post('/cidades',  CidadesControllers.create);

export { router };