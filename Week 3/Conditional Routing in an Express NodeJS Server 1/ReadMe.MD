
```markdown
# Conditional Routing in an Express NodeJS Server 1

This is a simple Express NodeJS server application that demonstrates conditional routing to serve different responses based on certain conditions.

## Project Setup

1. **Initialize a new NodeJS project:**
   ```bash
   npm init -y
   ```

2. **Install Express using npm:**
   ```bash
   npm install express
   ```

3. **Import Express in your main application file:**
   Create a new file, for example, `server.js`, and import Express:
   ```javascript
   const express = require('express');
   const app = express();
   ```

## Server Configuration

4. **Create an Express application instance:**
   You've already done this with `const app = express();` in the previous step.

5. **Configure the server to listen on a port:**
   Add the following code to listen on the provided port or default to port 3000:
   ```javascript
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

## Conditional Routing

6. **Implement a route handler for the path `/foo`:**
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

   Explanation: 
   - In the first route handler for `/foo`, we use `Math.random()` to generate a random number between 0 and 1. If the generated number is less than 0.5, we send the response 'sometimes this'. Otherwise, we call `next()`, passing control to the next applicable route handler.
   - In the second route handler for `/foo`, we send the response 'and sometimes that'. This route handler will be called if the generated number is greater than or equal to 0.5 in the previous handler.

## Error Handling

7. **Set up a 404 error handler:**
   Implement a middleware to handle undefined routes and return a "404 - Not Found" response:
   ```javascript
   app.use((req, res) => {
       res.status(404).send('404 - Not Found');
   });
   ```

## Starting the Server

8. **Write the command to start the server:**
   At the end of your `server.js` file, add the command to start the server:
   ```javascript
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

```


