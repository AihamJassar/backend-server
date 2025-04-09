const { register , login} = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

module.exports = router;

// {
//     "name": "aiham 2002",
//     "email": "aihak;'lm2[Ll;0p02",
//     "password": "aiham2002"
// }