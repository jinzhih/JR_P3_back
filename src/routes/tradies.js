const express =  require('express');
const {
    addTradie,
    getAllTradies,
    getTradiebyID,
    updateTradieById,
    getAllServicesById,
    getAllOrdersById,
    updateTradieImage,
} = require("../controllers/tradies");
const router = express.Router();

router.post('/', addTradie);
router.get('/', getAllTradies);
router.get('/:tradieId', getTradiebyID);
router.put('/:tradieId', updateTradieById);
router.get('/:tradieId/services', getAllServicesById);
router.get('/:tradieId/orders', getAllOrdersById);
router.put('/:tradieId/image', updateTradieImage);

module.exports = router;