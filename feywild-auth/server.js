require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const path = require('path');

const app = express();

// ✅ Connect to MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:');
    console.error(err);
  });


//
// =========================
//        CORS (FIXED)
// =========================
//
const allowedOrigins = [
  'https://thefeywildvault.com',
  'https://www.thefeywildvault.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow mobile apps / curl / server-to-server
    if (!origin) return callback(null, true); 

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // ❗ Don't throw — just reject silently with no CORS headers
    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Preflight MUST run before JSON/session
app.options('*', cors());


// =========================
// Parse JSON
// =========================
app.use(express.json());


// =========================
// Session Configuration
// =========================
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24
  }
}));


// Debug logs
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  console.log('Session:', req.session);
  next();
});

app.use((req, res, next) => {
  const origin = req.headers.origin;

  const allowedOrigins = [
    'https://thefeywildvault.com',
    'https://www.thefeywildvault.com',
    'http://localhost:3000'
  ];

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
  }

  next();
});

// =========================
// API Routes
// =========================
app.use('/api/patreon', require('./routes/patreon'));
app.use('/api', require('./routes/auth'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/courier', require('./routes/courier'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/chaos', require('./routes/chaos'));


// Static files
app.use(express.static(path.join(__dirname, '../')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
