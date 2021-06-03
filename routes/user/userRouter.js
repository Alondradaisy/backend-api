const express = require("express");
const { signup } = require("./controller/userController");
const router = express.Router();

router.post('/sign-up', signup);


module.exports = router;