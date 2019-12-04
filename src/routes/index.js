const { Router } = require("express");
const AdminRouter = require("./admin");
const PhoneRouter = require("./phone");
const { Auth } = require("../middlewares");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    body: "UP"
  });
});

router.use("/", AdminRouter);
router.use("/", Auth.checkToken, PhoneRouter);

module.exports = router;
