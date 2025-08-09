const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory users array
let users = [];

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next({ status: 400, message: 'All fields are required' });
    }

    // Check if user exists
    const existing = users.find(u => u.email === email);
    if (existing) {
      return next({ status: 400, message: 'Email already registered' });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashed
    };

    // Store in memory
    users.push(newUser);

    res.status(201).json({ message: 'User registered', user: { id: newUser.id, name: newUser.name, email: newUser.email } });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) return next({ status: 400, message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next({ status: 400, message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
