
# Handling Route Parameters in Express 3

This is an Express server application that demonstrates the use of route parameters to handle dynamic routes.


## Explanation of Route Parameters in Express

In Express, route parameters are used to extract values from the URL path. They are defined in route paths by placing a colon (`:`) followed by the parameter name. For example, in the route `'/user/:username'`, `:username` is a route parameter.

When a request is made to a route with parameters, Express automatically parses the URL and extracts the parameter values, making them accessible through the `req.params` object. In the provided code, `req.params.username` is used to retrieve the value of the `username` parameter from the URL path and personalize the response message accordingly.

## Error Handling

The server includes a 404 error handler to manage requests to undefined routes. If a request is made to a route that doesn't exist, the server responds with a "404 - Not Found" message.

---
## Starting and Testing the Server

To start the server, follow these steps:


## Starting and Testing the Server

To start the server, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <https://github.com/Aki047/AD-320/tree/main/Week 3/Handling Route Parameters in Express 3>
   ```

2. Navigate to the project directory:
   ```bash
   cd dynamic-route-handling
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

Once the server is running, you can test it by accessing the defined route with different usernames. For example:

- `http://localhost:3000/user/john`
- `http://localhost:3000/user/mary`
- `http://localhost:3000/user/your-username`

The server should respond with a personalized message based on the provided username.


