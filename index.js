const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3000;

app.post('/api/total-value', (req, res) => {
    const products = req.body;
    const totalValue = products.reduce((total, product) => {
        if (!product.name || typeof product.price !== 'number' || typeof product.quantity !== 'number') {
          return res.status(400).json({ message: 'Invalid product data. Each product should have name, price, and quantity.' });
        }
        return total + (product.price * product.quantity);
      }, 0);

      res.json({ totalValue });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});