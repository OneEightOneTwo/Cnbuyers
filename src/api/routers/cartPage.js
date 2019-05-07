const express = require('express');
const router = express.Router();

let db = require('../db');

router.get('/find', async (req, res) => {
	let data = await db.find('cart');
	res.send(data);
})

module.exports = router;