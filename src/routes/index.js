const { Router } = require("express");
const AdminRouter = require("./admin");
const PhoneRouter = require("./phone");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    body: "UP"
  });
});

router.use("/", AdminRouter);
router.use("/", PhoneRouter);

module.exports = router;
