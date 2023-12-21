import { Router } from 'express';
import PlanosController from '../controllers/PlanosController';
import { planosShowValidator } from '../validators/planosValidator';

const planosRouter = Router();
const planosController = new PlanosController();

planosRouter.get('/', planosController.index);

planosRouter.get('/:id', planosShowValidator, planosController.show);

export default planosRouter;
