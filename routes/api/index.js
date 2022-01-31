const router = require("express").Router();
const alertRoutes = require("./alert");

router.use("/", alertRoutes);

module.exports = router;