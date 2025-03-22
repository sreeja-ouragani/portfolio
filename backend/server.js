const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sendEmail = require("./nodemailer");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Check if .env file is loaded properly
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ ERROR: Missing EMAIL_USER or EMAIL_PASS in .env file.");
    process.exit(1); // Stop the server if env variables are missing
} else {
    console.log("✅ .env file loaded successfully.");
}

// API Route for Contact Form
app.post("/send-email", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // ✅ Check if all fields are provided
        if (!name || !email || !message) {
            console.warn("⚠️ Missing fields in request:", { name, email, message });
            return res.status(400).json({ error: "All fields are required" });
        }

        console.log(`📩 Sending email to: ${email}, Name: ${name}`);

        await sendEmail(name, email, message);
        console.log("✅ Email sent successfully!");
        
        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Email sending failed:", error.message);
        res.status(500).json({ error: "Failed to send email", details: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
