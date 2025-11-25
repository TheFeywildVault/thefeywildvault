require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const path = require('path');

const app = express();

// ✅ Connect to MongoDB with debugging
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
  });

// ✅ CORS setup
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://thefeywildvault.com',
    'https://www.thefeywildvault.com',
    'https://feywildvault-backend.onrender.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// ✅ Handle preflight requests
app.options('*', cors());

// ✅ Parse JSON
app.use(express.json());

// ✅ Session config
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    secure: true, // true if you're using HTTPS in production
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24
  }
}));

// ✅ Debug middleware — log requests + session
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  console.log('Session:', req.session);
  next();
});

// ✅ API Routes
app.use('/api/patreon', require('./routes/patreon'));
app.use('/api', require('./routes/auth'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/courier', require('./routes/courier'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/chaos', require('./routes/chaos'));

// ✅ Serve static files
app.use(express.static(path.join(__dirname, '../')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
