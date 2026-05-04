const express = require('express');
const app = express();

app.use(express.json());

// Mock JWT login endpoint
app.post('/restwar/restapi/jwt', (req, res) => {
    console.log("Received login request:", req.body);

    res.json({
        token: "mock-jwt-token-12345",
        user: req.body.username || "partner1",
        status: "success"
    });
});

// Optional: health check
app.get('/', (req, res) => {
    res.send("Mock b2bauth service running");
});

const PORT = 30060;
app.listen(PORT, () => {
    console.log(`Mock auth service running on port ${PORT}`);
});