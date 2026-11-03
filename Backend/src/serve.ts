
import dotenv from 'dotenv';

dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;

function startServer() {

  app.listen(Number(PORT), '0.0.0.0', () => {

    console.log(
      `API ejecutándose en el puerto ${PORT}`
    );

  });

}

startServer();
