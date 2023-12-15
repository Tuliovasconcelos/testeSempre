import { createConnection } from 'typeorm';

createConnection()
  .then(connection => {
    // Aqui você pode usar a conexão MySQL conforme necessário
    console.log('Database Mysql started on port 3306!! 👌');
  })
  .catch(error => console.log('Erro ao estabelecer a conexão:', error));
