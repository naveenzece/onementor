const db = require("../config/mysql");
const { validateFields, validateEmail, validateMobileNumber, validateName } = require('../util/userValidation');

const fetchUser = (req, res) => {
    const fetchQuery = "SELECT * FROM coach";
    db.query(fetchQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }

        if (result.length === 0) {
            return res.status(400).json({ error: "user not found" });
        }

        return res.status(200).json({ message: "User data fetched successfully", data: result });
    });
};

const createUser = (req, res) => {
    const { name, emailId, phone } = req.body;

    const validations = [
        validateName(name, 3, 50),
        validateEmail(emailId),
        validateMobileNumber(phone),
    ];

    const validationError = validateFields(validations);

    if (validationError !== true) {
        return res.status(400).json({ error: validationError });
    }

    const checkUserQuery = "SELECT * FROM coach WHERE emailId = ?";
    db.query(checkUserQuery, [emailId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }

        if (result.length > 0) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const currentTime = Date.now();
        console.log(currentTime);

        const insertUserQuery = "INSERT INTO coach (name, emailId, phone) VALUES (?, ?, ?)";
        db.query(insertUserQuery, [name, emailId, phone], (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to create user" });
            }

            return res.status(201).json({ message: "User created successfully" });
        });
    });
};

const editUser = (req, res) => {
  const { name, emailId, phone } = req.body;
  const { id } = req.params;

  const validations = [
    name ? validateName(name) : true,
    emailId ? validateEmail(emailId) : true,
    phone ? validateMobileNumber(phone) : true
  ];

  const validationError = validateFields(validations);

  if (validationError !== true) {
    return res.status(400).json({ error: validationError });
  }

  const fetchQuery = "SELECT * FROM coach WHERE id=?";
  db.query(fetchQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length === 0) {
      return res.status(400).json({ error: "User not found with this ID" });
    }

    const updateQuery = "UPDATE coach SET name=?, emailId=?, phone=? WHERE id=?";
    db.query(updateQuery, [name || result[0].name, emailId || result[0].emailId, phone || result[0].phone, id], (err) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(200).json({ message: "User updated successfully" });
    });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const deleteQuery = "DELETE FROM coach WHERE id=?";
  const fetchQuery = "SELECT * FROM coach WHERE id=?";
  db.query(fetchQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length === 0) {
      return res.status(400).json({ error: "User not found with this ID" });
    }

    db.query(deleteQuery, [id], (err) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }

      return res.status(200).json({ message: "User deleted successfully" });
    });
  });
};

module.exports = { fetchUser,createUser, editUser, deleteUser };