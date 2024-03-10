const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);});

app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello ${username}`);
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


