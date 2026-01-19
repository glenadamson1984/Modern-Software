import * as dotenv from "dotenv";
const sgMail = require("@sendgrid/mail");
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Error sending email." });
    return;
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(400).json({ message: "Valid email is required." });
    return;
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "glenadamson1984@gmail.com",
    from: "glen.adamson@modern-software.co.uk",
    subject: "Newsletter Signup - Modern Software",
    text: `New newsletter signup:\nEmail: ${email}`,
    html: `<p><strong>New Newsletter Signup</strong></p><p>Email: ${email}</p><p>Date: ${new Date().toLocaleString()}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Successfully subscribed to newsletter." });
  } catch (e) {
    res.status(502).json({
      message: `Error sending email.`,
    });
  }
}
