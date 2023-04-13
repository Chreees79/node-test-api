import express from 'express';
import { setupDb } from './config/dbConfig.js';

const app = express();

app.listen(5500, () => console.log("Server started: 5500"));
setupDb("mongodb+srv://mongoDB:mongoDBChris@cluster0.ksxvseb.mongodb.net/node-test-api")