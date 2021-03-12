# Diamond's Express Example

This is a basic Express API. 
It has User authentication using JSON web tokens and is an example of how I structure Express APIs.

# Usage
```
npm install && npm run dev // Installs and runs with Nodemon
```

# Requirements

Node
Express
MongoDB

# File Structure

## Configs
This folder contains various files for configuring the Express app.

## Controllers
In the Express application, the Controllers contain logic for interacting with Services and returning data back to the Client.

## Middleware
Middleware functions are called before Controllers and can check properties in the ``Req`` parameter.

The Express app uses ``auth.js`` for checking if a request has a Bearer Token before accessing protected resources.

## Models
This folder contains the database Mongoose Schemas. Read more about Models here:

https://mongoosejs.com/docs/2.7.x/docs/model-definition.html

## Routes
These route files are used to determine what Controllers to call each time a request is sent to the server

## Services
Service files contain logic for interacting with Database models or External APIs.