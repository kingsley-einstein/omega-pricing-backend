const { Router } = require("express");
const { StoreController } = require("../controllers");
const { Auth } = require("../middlewares");

const router = Router();

router.post("/store", Auth.checkToken, StoreController.create);
router.get("/stores", Auth.checkToken, StoreController.getStores);
router.get("/store/:id", Auth.checkToken, StoreController.getStore);
router.patch("/store/:id", Auth.checkToken, StoreController.editStore);
router.delete("/store/:id", Auth.checkToken, StoreController.deleteStore);

module.exports = router;
