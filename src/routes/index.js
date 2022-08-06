import { Router } from "express";
import API from "../api/API.controller.js";

const routes = Router();

routes.get("/", API.sendAll);
routes.get("/ref", API.sendRef);
routes.get("/:id", API.sendMonth);

export default routes;
