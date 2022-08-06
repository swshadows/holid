const express = require("express");
const server = express();
const cors = require("cors");
const routes = require("./routes/routes");

server.use(cors());
server.use(routes);
server.use(express.json());

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Rodando servidor em http://localhost:${port}`);
});
