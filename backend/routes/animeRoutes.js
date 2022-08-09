const express = require("express");
const router = express.Router();


const { getAnimes } = require('../controllers/animeController')

router.get("/", getAnimes);

module.exports = router;
