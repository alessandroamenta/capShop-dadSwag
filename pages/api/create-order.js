import Order from '../../models/Order';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { products, email, name, total } = req.body;

      const order = new Order({
        products,
        email,
        name,
        total,
        created: Date.now(),
      });

      await order.save();

      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

