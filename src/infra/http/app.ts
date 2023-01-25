import "reflect-metadata";
import express, { Express } from "express";
import "express-async-errors";

import { router } from "./routes/routes";

const app: Express = express();

app.use(express.json());

app.use("/api/v1", router);

export { app };