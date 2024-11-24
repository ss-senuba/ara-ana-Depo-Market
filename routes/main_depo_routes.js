const express = require('express');
const router = express.Router();
const { create_main_depo, add_product } = require('../controllers/main_depo_controller');

// Depo rotaları
router.post('/create', create_main_depo);
router.post('/:warehouseId/add-product', add_product);

module.exports = router;
