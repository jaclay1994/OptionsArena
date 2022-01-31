const router = require("express").Router();
const alertController = require("../../controllers/alertController");

router.route("/alert")
.get(alertController.findAll)
.post(alertController.create);

module.exports = router;