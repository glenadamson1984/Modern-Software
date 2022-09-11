import * as dotenv from "dotenv";
const sgMail = require("@sendgrid/mail");
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Error sending email." });
  }

  const { name, phone, email, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "glenadamson1984@gmail.com", // Change to your recipient
    from: "glen.adamson@modern-software.co.uk", // Change to your verified sender
    subject: "Modern Software Generated Enquiry",
    text: `Name ${name}
      Phone: ${phone}
      Email: ${email},
      Message: ${message}`,
    html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ name: "Message sent successfully." });
  } catch (e) {
    res.status(502).json({
      message: `Error sending email. ${process.env.PASSWORD} ${err}`,
    });
  }
}
