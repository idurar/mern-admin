const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".variables.env" });

exports.loginDemo = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        id: "60b4e282eb314b0015faf2a9",
      },
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      result: {
        token,
        admin: {
          id: "60b4e282eb314b0015faf2a9",
          name: "admin",
          isLoggedIn: true,
        },
      },
      message: "Successfully login admin",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, result: null, message: err.message });
  }
};
