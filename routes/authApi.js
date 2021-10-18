const express = require("express");

const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const {
  isValidToken,
  login,
  logout,
} = require("../controllers/authController");

const { loginDemo } = require("../controllers/authControllerDemo");

// use {login } from authController , uncomment line below

// router.route("/login").post(catchErrors(login));

// for development & production don't use this line router.route("/login").post(catchErrors(loginDemo)); (you should remove it) , this is just demo login contoller
router.route("/login").post(catchErrors(loginDemo));
router.route("/logout").post(isValidToken, catchErrors(logout));

module.exports = router;
