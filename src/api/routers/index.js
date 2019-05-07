const express = require('express');
const router = express.Router();

let loginPage = require('./loginPage');
let cartPage = require('./cartPage');

router.use('/login', loginPage);
router.use('/cart', cartPage);

module.exports = router;