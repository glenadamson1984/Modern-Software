import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  // if (req.method !== "POST") {
  //   res.status(404).json({ message: "Error sending email." });
  // }

  const { name, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "modernsoftware@hotmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: "modernsoftware@hotmail.com",
    to: "glenadamson1984@gmail.com",
    subject: "Modern Software Generated Enquiry",
    text: `Name ${name}
    Phone: ${phone}
    Email: ${email}, 
    Message: ${message}`,
    html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        reject(err);
        res.status(502).json({
          message: `Error sending email. ${process.env.PASSWORD} ${err}`,
        });
      } else {
        resolve(info);
        res.status(200).json({ name: "Message sent successfully." });
      }
    });

    res.status(200).json({ name: "Message sent successfully." });
  });
}
