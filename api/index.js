// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

// Routes
const userRouter = require('./routes/usersRoute');
const authRoutes = require("./routes/authRoute");
const coachRouter = require('./routes/coachRoute');
const profileRoutes = require('./routes/user/profileRoutes');
const coachRoutes = require("./routes/user/coachdiscover");
const slotRoutes = require("./routes/user/bookslot");
const reportRoutes = require("./routes/user/report");
const progressRoutes = require("./routes/user/progress");
const interactRoutes = require("./routes/user/userai");

const coachprofile = require("./routes/coach/profile");
const manageschedule = require("./routes/coach/manageschedule");
const request = require("./routes/coach/request");

// Swagger
const { swaggerUi, specs } = require('./config/swagger');

const app = express();

// CORS setup for frontend at localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Next.js dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Body parsers
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Session setup
app.use(session({
  secret: 'suriya12345', // Replace with a strong secret in production
  resave: false,                 // don't save session if unmodified
  saveUninitialized: true,       // save new sessions
  cookie: {
    maxAge: 1000 * 60 * 60,      // 1 hour
    secure: false,               // set true if using HTTPS
  }
}));

// Test middleware to see session
app.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
});

// Routes
app.use('/api/users', userRouter);
app.use("/api/auth", authRoutes);
app.use('/api/coach', coachRouter);
app.use('/api/profile', profileRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/bookings", slotRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/interact", interactRoutes);

// coach routes
app.use("/api/coachprofile", coachprofile);
app.use("/api/manageschedules", manageschedule);
app.use("/api/requests", request);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Test route
app.get('/', (req, res) => {
  console.log(req.session);     // All session data
  console.log(req.sessionID);   // Session ID
  res.send('Hello, world!');
});

// Example: check if session is active
app.get('/check-session', (req, res) => {
  if (req.session.user) {
    res.send(`✅ Session is active. Logged in as: ${req.session.user.name}`);
  } else {
    res.send("❌ No active session. Please login.");
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Error logging out");
    res.send("Logged out successfully");
  });
});
// check session 



app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy login check (replace with DB check)
  if(email === "test@example.com" && password === "1234") {
    req.session.user = { id: 1, name: "Suriya", email }; // set session
    return res.send("Logged in successfully!");
  }

  res.status(401).send("Invalid credentials");
});

// Start server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
});
