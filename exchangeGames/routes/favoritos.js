const express = require("express");
const router = express.Router();

const favoritos = require('../controller/favoritos')

router.get('/',favoritos.favoritos )

router.post('/',favoritos )


module.exports = router