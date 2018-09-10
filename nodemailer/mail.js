const nodemailer = require('nodemailer');
const sendEmail = function (options, callback) {
    let transporter = nodemailer.createTransport({
        host: options.host,
        secure: options.secure,
        port: options.port,
        auth: {
            user: options.user,
            pass: options.pass
        }
    });
    transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text
    }, function (err) {
        callback(err);
    });
};

module.exports = {sendEmail}