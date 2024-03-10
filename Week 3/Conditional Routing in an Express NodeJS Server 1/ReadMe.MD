# Conditional Routing in an Express NodeJS Server 1

This is a simple Express NodeJS server application that demonstrates conditional routing to serve different responses based on certain conditions.

## Project Setup

1. **Initialize a new NodeJS project:**
   ```bash
   npm init -y

Install Express using npm:

bash
Copy code
npm install express
Import Express in your main application file:
Create a new file, for example, server.js, and import Express:

javascript
Copy code
const express = require('express');
const app = express();
Server Configuration
Create an Express application instance:
You've already done this with const app = express(); in the previous step.

Configure the server to listen on a port:
Add the following code to listen on the provided port or default to port 3000:

javascript
Copy code
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
Conditional Routing
Implement a route handler for the path /foo:
Add two route handlers for the /foo path, each with different responses. Use Math.random() to choose between the two responses:
javascript
Copy code
app.get('/foo', (req, res, next) => {
    if (Math.random() < 0.5) {
        res.send('sometimes this');
    } else {
        next();
    }
});

app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});
Error Handling
Set up a 404 error handler:
Implement a middleware to handle undefined routes and return a "404 - Not Found" response:
javascript
Copy code
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});
Starting the Server
Write the command to start the server:
At the end of your server.js file, add the command to start the server:
javascript
Copy code
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

