const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: "Authentication failed" });
    }

    const decodedToken = jwt.verify(token, "your-secret-key");
    req.userEmail = { userId: decodedToken.email };
    next();
  } catch (err) {
    res.status(401).json({ error: "Authentication failed" });
  }
};
