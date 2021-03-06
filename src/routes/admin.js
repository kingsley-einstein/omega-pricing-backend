const { Router } = require("express");
const { AdminController } = require("../controllers");
const { Auth } = require("../middlewares");

const router = Router();

router.post("/admin", AdminController.create);
router.post("/admin/login", AdminController.login);
router.post("/admin/logout", Auth.checkToken, AdminController.logout);
router.get("/admin", Auth.checkToken, AdminController.getLoggedUser);

module.exports = router;
