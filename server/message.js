// const accountSid = '' // El id de tu cuenta; 
// const authToken = '' // El TOKEN de tu cuenta; 
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
     console.log('req.body:', req.body);
            let messageBody = req.body.body;
            let numberList = req.body.toBinding;
            var numbers = [];
            for (let i = 0; i < numberList.length; i++) {
                numbers.push(JSON.stringify({
                    binding_type: 'sms',
                    address: numberList[i]
                }))
            }


            const notificationOpts = {
                toBinding: numbers,
                body: messageBody,
            };

            console.log('numbers:',notificationOpts.toBinding);
            console.log('body', notificationOpts.body);

            const response = await this.client.notify
                .services(process.env.SERVICE_SID)
                .notifications.create(notificationOpts)
                .then(notification => console.log('notification.sid',notification.sid))
                .catch(error => console.log(error));

            console.log(response);

            res.json({
                msg: 'Message sent successfully'
            });
}


module.exports = sendMessage, sendMessageWhatsapp, sendBulkMessages;
