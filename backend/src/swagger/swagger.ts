import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'; // Adicione esta linha

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sempre Internet',
      version: '1.0.0',
      description: 'Documentação da API com Swagger',
    },
  },
  apis: [
    './src/modules/fichaCadastral/routes/fichaCadastral.routes.ts',
    './src/modules/analiseCobertura/routes/analiseCobertura.routes.ts',
    './src/modules/planos/routes/planos.routes.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
