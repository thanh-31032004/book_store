import express from 'express';
import cors from 'cors';
import router from './routes';
import connectMongoe from './config/dbconfig';
const app = express();
app.use(cors());
app.use(express.urlencoded(
    { extended: true }
))
app.use(express.json());
const dbUrl = process.env.DB_URI || "mongodb://127.0.0.1:27017/bookstore";
connectMongoe(dbUrl);
app.use('/', router);
export const viteNodeApp = app;
