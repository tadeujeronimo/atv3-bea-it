import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";

import express from "express";
import cors from "cors";
import "./helpers/container";
import router from "routes";
import ConnectToMongoDb from "database";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();
// A conexao e iniciada no bootstrap para falhar cedo se o banco estiver indisponivel.
ConnectToMongoDb.execute();

app.use(express.json());
app.use(cors());
app.use(router);
// O middleware de erro deve ser registrado por ultimo para capturar erros anteriores.
app.use(errorMiddleware.handle);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running, in port: ${port}`));
