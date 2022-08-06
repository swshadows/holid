const dates = require("./dates");

module.exports = {
  sendAll(req, res) {
    res.send(dates);
  },

  sendMonth(req, res) {
    const { id } = req.params;
    if (dates[id - 1]) return res.status(200).send(dates[id - 1]);
    return res.status(400).json({ message: "Mês inválido" });
  },
};
