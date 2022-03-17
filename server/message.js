// const accountSid = 'AC493b57f017417a7b1a79225b38d43fa6' // El id de tu cuenta; 
// const authToken = '6f627554365489744095bfe49cdc3f48' // El TOKEN de tu cuenta; 
const accountSid = '' // El id de tu cuenta Patmed; 
const authToken = '' // El TOKEN de tu cuenta Patmed; 
const SERVICE_SID = 'MGfb'
const client = require('twilio')(accountSid, authToken);



const sendMessage = async(req, res) => {
    try {

        const { number, message } = req.body;

        const response = await client.messages.create({
            body: message,
            from: '+14023472425', // El número que te proporcionen       
            to: `${number}`,
            tittle: "Patmed"
        });

        console.log(response);

        res.json({
            msg: 'Success'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error'
        });
    }
}

const sendMessageWhatsapp = async(req, res) => {
    try {

        const { number, message } = req.body;

        const response = await client.messages.create({
            body: message,
            from: 'whatsapp:+14155238886', // El número que te proporcionen       
            to: `whatsapp:${number}`
        });

        console.log(response);

        res.json({
            msg: 'Success!'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error'
        });
    }
}

const sendBulkMessages = async(req, res) => {
    let messageBody = req.body.body;
    let numberList = req.body.numbers;
    var numbers = [];
    for (i = 0; i < numberList.length; i++) {
        numbers.push(JSON.stringify({
            binding_type: 'sms',
            address: numberList[i]
        }))
    }


    const notificationOpts = {
        toBinding: numbers,
        body: messageBody,
    };

    const response = await client.notify
        .services(SERVICE_SID)
        .notifications.create(notificationOpts)
        .then(notification => console.log(notification.sid))
        .catch(error => console.log(error));

    console.log(response);

    res.json({
        msg: 'Message sent successfully'
    });
}



module.exports = sendMessage, sendMessageWhatsapp, sendBulkMessages;