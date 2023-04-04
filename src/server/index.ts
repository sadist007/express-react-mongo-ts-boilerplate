import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = Number(process.env.PORT) || 8000;

app.use(express.static('dist'));

app.listen(port, () => {
  console.debug(`[server] app running on http://localhost:${port}`);
});
