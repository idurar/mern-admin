const express = require("express");

const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const {
  isValidToken,
  login,
  logout,
} = require("../controllers/authController");

const { loginDemo } = require("../controllers/authControllerDemo");

// router.route("/login").post(catchErrors(login));
router.route("/login").post(catchErrors(loginDemo));
router.route("/logout").post(isValidToken, catchErrors(logout));

module.exports = router;
