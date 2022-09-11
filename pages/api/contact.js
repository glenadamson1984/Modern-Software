import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
const sgMail = require("@sendgrid/mail");
dotenv.config();

export default async function handler(req, res) {
  // if (req.method !== "POST") {
  //   res.status(404).json({ message: "Error sending email." });
  // }

  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "glenadamson1984@gmail.com", // Change to your recipient
    from: "glen.adamson@modern-software.co.uk", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(200).json({ name: "Message sent successfully." });
    })
    .catch((error) => {
      console.error(error);
      res.status(502).json({
        message: `Error sending email. ${process.env.PASSWORD} ${err}`,
      });
    });

  // const { name, phone, email, message } = req.body;
  //
  // const transporter = nodemailer.createTransport({
  //   service: "hotmail",
  //   auth: {
  //     user: "modernsoftware@hotmail.com",
  //     pass: process.env.PASSWORD,
  //   },
  // });
  //
  // const mailData = {
  //   from: "modernsoftware@hotmail.com",
  //   to: "glenadamson1984@gmail.com",
  //   subject: "Modern Software Generated Enquiry",
  //   text: `Name ${name}
  //   Phone: ${phone}
  //   Email: ${email},
  //   Message: ${message}`,
  //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  // };
  //
  // await new Promise((resolve, reject) => {
  //   transporter.sendMail(mailData, function (err, info) {
  //     if (err) {
  //       reject(err);
  //       res.status(502).json({
  //         message: `Error sending email. ${process.env.PASSWORD} ${err}`,
  //       });
  //     } else {
  //       resolve(info);
  //       res.status(200).json({ name: "Message sent successfully." });
  //     }
  //   });
  //
  //
  // });
}
