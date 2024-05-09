// routes.js
const express = require("express");
const { signUp, login, logout, authenticateToken } = require("./controllers/user_controller");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get('/logout',logout);
router.get('/loggedIn',authenticateToken);

module.exports = router;
