import express from "express";
import bodyParser from "body-parser";
import { setupDb } from "./src/config/dbConfig.js";
import { router } from "./src/routes/postsController.js";

const app = express();

app.use(bodyParser.json());
app.use("/posts", router);

app.listen(5500, () => console.log("Server started: 5500"));
setupDb(
    "mongodb+srv://mongoDB:mongoDBChris@cluster0.ksxvseb.mongodb.net/node-test-api"
);
