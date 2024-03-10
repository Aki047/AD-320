

# Handling Query Strings in Express 4 

## Overview

This is an Express server application that demonstrates how to handle query strings in GET requests.

## Running the Server

To run the server, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <https://github.com/Aki047/AD-320/Week 3/Handling Query Strings in Express 4
   ```

2. Navigate to the project directory:
   ```bash
   cd express-query-string-handling
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Testing Query String Functionality

Once the server is running, you can test the query string functionality by sending GET requests with query strings to the `/get` route.

### Example GET Request:
```
GET http://localhost:3000/get?param1=value1&param2=value2
```

Replace `param1=value1&param2=value2` with your desired query parameters.

### Expected Behavior:

- The server will log the query parameters to the console.
- The server will respond with a message indicating that query string handling is completed.
- If you access any other route, the server will respond with a "404 - Not Found" message.

## Additional Information

- This server is configured to listen on port 3000 by default. You can change the port by setting the `PORT` environment variable.
- Query string parameters can be accessed using `req.query` in Express route handlers, as demonstrated in the code.

---

