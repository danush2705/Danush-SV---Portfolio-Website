const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // Fixed port number

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Contact form endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create submission object
        const submission = {
            id: Date.now(), // Unique ID based on timestamp
            timestamp: new Date().toISOString(),
            name,
            email,
            subject,
            message
        };

        // Read existing submissions
        let submissions = [];
        const filePath = path.join(dataDir, 'submissions.json');
        
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            submissions = JSON.parse(fileContent);
        }

        // Add new submission
        submissions.push(submission);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

        res.status(200).json({ 
            message: 'Form submitted successfully',
            submissionId: submission.id
        });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({ error: 'Failed to save submission' });
    }
});

// Endpoint to view submissions (for admin purposes)
app.get('/submissions', (req, res) => {
    try {
        const filePath = path.join(dataDir, 'submissions.json');
        if (fs.existsSync(filePath)) {
            const submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            res.json(submissions);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Error reading submissions:', error);
        res.status(500).json({ error: 'Failed to read submissions' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 