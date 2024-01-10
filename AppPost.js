app.post('/api/customers', async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.json({ message: 'Customer saved successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/customers', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  