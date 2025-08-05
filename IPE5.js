// Write a program to upload a text file upto 1MB size only using express JS.  Perform 
// necessary validation for file format and size.

const express = require('express');
const multer = require('multer');
const app = express();

// Serve index.html directly from current directory
app.use(express.static(__dirname, { index: "index.html" }));

// Multer config: memoryStorage (no folder) + file validation
const upload = multer({
    storage: multer.memoryStorage(), // Store file in memory (not on disk)
    limits: { fileSize: 1024 * 1024 }, // 1MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/plain') {
            cb(null, true);
        } else {
            cb(new Error('Only .txt files are allowed!'));
        }
    }
});

// Upload route
app.post("/upload", upload.single('myFile'), (req, res) => {
    if (req.file) {
        res.send(`<h2>✅ Uploaded "${req.file.originalname}" successfully</h2>`);
    } else {
        res.send(`<h2>❌ File not uploaded</h2>`);
    }
});

app.listen(4021, () => {
    console.log("🚀 Listening on http://localhost:4021");
});
