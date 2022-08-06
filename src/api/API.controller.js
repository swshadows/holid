import dates from "./dates.js";
import messages from "./messages.js";

export default {
  sendAll(req, res) {
    res.send(dates);
  },

  sendMonth(req, res) {
    const { id } = req.params;
    const date = dates[id - 1];
    if (date) return res.status(200).send(date);
    return res.status(400).json({ message: messages.invalidMonth });
  },

  sendRef(req, res) {
    res.json({ source: messages.sourceRef });
  },
};
