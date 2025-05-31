
const Cliente = require('../models/Client');

exports.listAllclients= async (req, res) => {
  
    try {
      const clients = await Cliente.findAll();
      console.log( clients);
      res.json(clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.findClientById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const client = await Cliente.findByPk(id);
  
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
  
      res.json(client);
    } catch (error) {
      console.error('Error fetching client:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };