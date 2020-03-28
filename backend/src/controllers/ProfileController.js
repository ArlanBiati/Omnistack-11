const connections = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.autorization

    const incident = await connections('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incident)
  }
}