const express = require('express');
const app = express();



app.get('/user(name)?', (req, res) => {
    res.send('This route matches /user and /username');
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

