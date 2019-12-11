const { Router } = require("express");
const { StoreController } = require("../controllers");

const router = Router();

router.post("/store", StoreController.create);
router.get("/stores", StoreController.getStores);
router.get("/store/:id", StoreController.editStore);
router.delete("/store/:id", StoreController.deleteStore);

module.exports = router;
