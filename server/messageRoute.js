const router = require('express').Router();
const sendMessage = require('./message');
const sendMessageWhatsapp = require('./message');
const sendBulkMessages = require('./message');

router.post(
    '/send', [],
    sendMessage
);

router.post(
    '/whatsapp', [],
    sendMessageWhatsapp
);

router.post(
    '/sendVarios',
    sendBulkMessages
)

module.exports = router;