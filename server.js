const express = require('express');
const app = express();
const port = 5000;

app.get('/sunflower', (req, res) => {
    res.json({
        name: "Sunflower",
        height: "150 cm",
        status: "Healthy"
    });
});

app.listen(port, () => {
    console.log(`Sunflower server running at http://localhost:${port}`);
});
