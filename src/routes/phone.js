const { Router } = require("express");
const { PhoneController } = require("../controllers");

const router = Router();

router.post("/phone/add", PhoneController.addPhone);
router.patch("/phone/edit/:id", PhoneController.editPhone);
router.delete("/phone/delete/:id", PhoneController.deletePhone);
router.get("/phone/getAll", PhoneController.findAllPhones);

module.exports = router;
