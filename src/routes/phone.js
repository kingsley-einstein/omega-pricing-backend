const { Router } = require("express");
const { PhoneController } = require("../controllers");
const { Auth } = require("../middlewares");

const router = Router();

router.post("/phone/add", Auth.checkToken, PhoneController.addPhone);
router.patch("/phone/edit/:id", Auth.checkToken, PhoneController.editPhone);
router.delete("/phone/delete/:id", Auth.checkToken, PhoneController.deletePhone);
router.get("/phone/getAll", PhoneController.findAllPhones);

module.exports = router;
