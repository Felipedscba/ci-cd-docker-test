import express from "express";

import pricesController from "./controllers/prices.controller";
import genericController from "./controllers/generic.controller";

const app = express();

app.get("/", genericController.healthCheck);
app.get("/prices", pricesController.getAllPrices);

export default app;
