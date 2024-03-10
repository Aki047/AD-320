import express from 'express';

const app = express();

// Define route handlers
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

// Define a 404 error handler
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
