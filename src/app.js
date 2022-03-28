import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import openRoutes from './routes/openRoutes';
import authRoutes from './routes/authRoutes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true, //access-control-allow-credentials:true
        // optionSuccessStatus: 200,
      })
    );
  }

  routes() {
    this.server.use(openRoutes);
    this.server.use(authRoutes);
  }
}
export default new App().server;
