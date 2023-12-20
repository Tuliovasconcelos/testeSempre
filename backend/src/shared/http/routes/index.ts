import { Router } from 'express';

import fichaCadastralRouter from '@modules/fichaCadastral/routes/fichaCadastral.routes';
import analiseCoberturaRouter from '@modules/analiseCobertura/routes/analiseCobertura.routes';
import planosRouter from '@modules/planos/routes/planos.routes';
import { swaggerUi, swaggerSpec } from '../../../swagger/swagger';

const routes = Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
routes.use('/fichaCadastral', fichaCadastralRouter);
routes.use('/analiseCobertura', analiseCoberturaRouter);
routes.use('/planos', planosRouter);

export default routes;
