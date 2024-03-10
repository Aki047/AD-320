
```markdown
# Express Server with Regular Expression Routes

This is a Node.js application built with Express that demonstrates the use of regular expression routes for handling different URL patterns.

## Installation

1. Clone the repository to your local machine:
   ```Command Line
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```Command Line
   cd express-server
   ```

3. Install dependencies using npm:
   ```Command Line
   npm install
   ```

## Usage

To start the server, run the following command:
```Command Line
npm start
```

By default, the server will listen on port 3000. You can specify a different port by setting the `PORT` environment variable.

## Regular Expression Routes

This server includes a route that uses a regular expression to match multiple URL patterns. The route `/user(name)?` matches both `/user` and `/username`. When a request is made to EITHER route, the server responds with a simple text message.

## Error Handling

The server includes a 404 error handler to manage requests to undefined routes. When a request is made to an undefined route, the server returns a "404 - Not Found" response.

## Server Startup

The server is started using the command:
```Command Line
npm start
```

Once the server is running, a confirmation message is logged to the console indicating the port it is listening on.

```