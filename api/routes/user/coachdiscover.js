const express = require('express');
const router = express.Router();
const { getCoaches } = require('../../controller/user/coachdiscover');

router.get('/', getCoaches);

module.exports = router;
