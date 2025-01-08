const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint
app.post('/contact', async (req, res) => {
    const { name, email, phone, msg } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mikeyee9417@gmail.com',
            pass: 'hmcr tule rakd pktv',
        },
    });

    const mailOptions = {
        from: email,
        to: 'mikeyee9417@gmail.com',
        subject: `Received a message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${msg}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending message');
    }
});

// Serve React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});