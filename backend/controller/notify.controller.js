import nodemailer from "nodemailer";
import cron from "node-cron";
import Pill from "../model/pill.js";

const handleUserNotify = async (req, res) => {
  const { email, userId } = req.body;
  let reminderTimes = [];
  try {
    const val = await Pill.find({ user: userId });

    if (!val) {
      return res
        .status(404)
        .json({ error: "User not found or no pill data available." });
    }

    console.log(val);
    reminderTimes = [val?.time1, val?.time2, val?.time3].filter(Boolean);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Try again later!" });
  }
  // Create the transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider
    auth: {
      user: "knowyourmed1@gmail.com",
      pass: process.env.EMAIL_PASS, // Use app passwords for Gmail if needed
    },
  });

  // Email options
  const mailOptions = {
    from: "knowyourmed1@gmail.com",
    to: `${email}`,
    subject: "Medicine Reminder",
    text: "This is a friendly reminder to take your medicines.",
  };

  // Function to send email
  const sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  };

  reminderTimes.forEach((time) => {
    const [hour, minute] = time.split(":");
    const cronExpression = `${minute} ${hour} * * *`;

    // Schedule the cron job
    const job = cron.schedule(cronExpression, async () => {
      const currentDate = new Date();
      const endDate = new Date(val.date);
      endDate.setDate(endDate.getDate() + val.duration);

      if (currentDate <= endDate) {
        console.log(`Sending email to ${user.email}...`);
        sendEmail();
      } else {
        console.log(`Stopping email job for ${user.email}, duration exceeded.`);
        job.stop();
      }
    });
  });

  res.status(200).json({ message: "Notification scheduling initialized." });
};

export { handleUserNotify };
