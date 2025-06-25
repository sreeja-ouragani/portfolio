const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

exports.handler = async (event) => {
    try {
        // ✅ Parse the request body from the event
        const { name, email, message } = JSON.parse(event.body);

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "All fields are required" }),
            };
        }

        console.log(`📩 Sending email from: ${email}, Name: ${name}`);

        // Debugging: Check if Nodemailer is properly loaded
        console.log("🔍 Nodemailer Object:", nodemailer);
        console.log("🔍 Nodemailer Keys:", Object.keys(nodemailer));

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");

        return {
            statusCode: 200,
            body: JSON.stringify({ success: "Email sent successfully!" }),
        };
    } catch (error) {
        console.error("❌ Email sending failed:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email", details: error.message }),
        };
    }
};
