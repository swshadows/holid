import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const server = express();

server.use(cors());
server.use(routes);
server.use(express.json());

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Rodando servidor em http://localhost:${port}`);
});
