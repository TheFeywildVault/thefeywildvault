require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const path = require('path');
const siteStatsRoutes = require("./routes/siteStats");

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
//        CORS
// =========================
//
const allowedOrigins = [
  'https://thefeywildvault.com',
  'https://www.thefeywildvault.com',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin, such as curl, Postman, or server-to-server requests
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Preflight must use the same CORS options
app.options('*', cors(corsOptions));


// =========================
// Parse JSON
// =========================
app.use(express.json());

app.set("trust proxy", 1);


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
    domain: '.thefeywildvault.com',
    maxAge: 1000 * 60 * 60 * 24
  }
}));


// Debug logs
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  console.log('Session:', req.session);
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
app.use("/api/site-stats", siteStatsRoutes);


// Static files
app.use(express.static(path.join(__dirname, '../')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));