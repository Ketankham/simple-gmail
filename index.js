const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ketankham@gmail.com',
        pass: 'ekupyyyyhrbrbxjj'
    }
});

const mailOptions = {
    from: "Mamuni", // sender address
    to: "ketanmk26@gmail.com", // list of receivers
    subject: "Mamuni meet ", // Subject line
    html: "<p> All the best  </p>"
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
    {
      console.log(err);
    }
});