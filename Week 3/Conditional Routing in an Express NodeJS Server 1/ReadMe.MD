
# Conditional Routing in an Express NodeJS Server 1

This is a simple Express NodeJS server application that demonstrates conditional routing to serve different responses based on certain conditions.

## Project Setup

### Initialize a new NodeJS project:

```bash
npm init -y
```

### Install Express using npm:

```bash
npm install express
```

### Import Express in your main application file:

Create a new file, for example, `server.js`, and import Express:

```javascript
const express = require('express');
const app = express();
```

## Server Configuration

### Configure the server to listen on a port:

Add the following code to listen on the provided port or default to port 3000:

```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

## Conditional Routing

### Implement a route handler for the path `/foo`:

Add two route handlers for the `/foo` path, each with different responses. Use `Math.random()` to choose between the two responses:

```javascript
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
```
## Error Handling

Implement a middleware to handle undefined routes and return a "404 - Not Found" response:

```javascript
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
    
#### Explanation:

- In the first route handler for `/foo`, we use `Math.random()` to generate a random number between 0 and 1. If the generated number is less than 0.5, we send the response 'sometimes this'. Otherwise, we call `next()`, passing control to the next applicable route handler.
- In the second route handler for `/foo`, we send the response 'and sometimes that'. This route handler will be called if the generated number is greater than or equal to 0.5 in the previous handler.





});
```

