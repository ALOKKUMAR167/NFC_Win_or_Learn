const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a Nodemailer transporter with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'winorlearns2023@gmail.com', // Replace with your Gmail email address
        pass: 'Winorlearn' // Replace with your Gmail password or App Password
    }
});

// Define a route to send an email
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    // Create email data
    const mailOptions = {
        from: 'winorlearns2023@gmail.com', // Replace with your Gmail email address
        to: 'alokamit161@gmail.com',
        subject: subject,
        text: text
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
            res.status(500).json({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
