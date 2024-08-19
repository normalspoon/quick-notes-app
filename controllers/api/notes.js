const Text = require('../../models/text');

module.exports = {
    create,
    index,
  };


  async function index(req, res) {
    try {
      const notes = await Text.find({});
      res.json(notes);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async function create(req, res) {
    try {
      const note = await Text.create(req.body);
      res.json(note);
    } catch (err) {
      res.status(400).json(err);
    }
  }

