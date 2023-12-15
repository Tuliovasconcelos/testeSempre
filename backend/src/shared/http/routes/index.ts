import { Router } from 'express';

import fichaCadastralRouter from '@modules/fichaCadastral/routes/fichaCadastral.routes';
import analiseCoberturaRouter from '@modules/analiseCobertura/routes/analiseCobertura.routes';
import planosRouter from '@modules/planos/routes/planos.routes';

const routes = Router();

routes.use('/fichaCadastral', fichaCadastralRouter);
routes.use('/analiseCobertura', analiseCoberturaRouter);
routes.use('/planos', planosRouter);

export default routes;
