
```markdown
# Regular Expressions in Express Route Paths 2

This is a Node.js application built with Express that demonstrates the use of regular expression routes for handling different URL patterns. The example used will be routing / users and /username.  

## Server Configuration
The server is configured to listen on a port specified by the environment variable PORT, defaulting to port 3000.

## Regular Expression Routes

This server includes a route that uses a regular expression to match multiple URL patterns. The route `/user(name)?` matches both `/user` and `/username`. When a request is made to EITHER route, the server responds with a simple text message.

## Explanation of Regular Expressions in Route Paths

Regular expressions are powerful tools for pattern matching in strings. In Express route paths, regular expressions can be used to define dynamic routes that match multiple URL patterns. In the example /user(name)?, the (name) part is enclosed in parentheses to create a capturing group, and the ? quantifier makes the group optional. This means that the (name) part can match either "name" or nothing at all. Therefore, the route /user will match as well as /username, making the route more flexible and versatile.

## Error Handling

The server includes a 404 error handler to manage requests to undefined routes. When a request is made to an undefined route, the server returns a "404 - Not Found" response.

## Server Startup

The server is started using the command:
```Command Line
npm start
```

Once the server is running, a confirmation message is logged to the console indicating the port it is listening on.

```