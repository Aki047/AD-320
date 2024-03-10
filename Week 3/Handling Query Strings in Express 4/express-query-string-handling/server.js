const express = require('express');
const app = express();


app.get('/get', (req, res) => {
    console.log('Query parameters:', req.query);
    res.send('Query string handling completed');
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
