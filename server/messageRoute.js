const router = require("express").Router();
const {
  sendMessage,
  sendBulkMessages,
  sendMessageWhatsapp,
} = require("./message");

router.post("/send", [], sendMessage);

router.post("/whatsapp", [], sendMessageWhatsapp);

router.post("/sendVarios", sendBulkMessages);

module.exports = router;
