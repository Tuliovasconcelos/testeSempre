import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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
    './src/modules/fichaCadastral/swagger/fichaCadastralSwagger.ts',
    './src/modules/analiseCobertura/swagger/analiseCoberturaSwagger.ts',
    './src/modules/planos/swagger/planosSwagger.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
