## DigitalAPI

This is a node API using the Express framework to get posts from ``https://dinotest.wpengine.com/wp-json/wp/v2/posts``.

It features user authentication using JWT tokens and API documentation using Swagger. You can get all posts, a post by its id, or by it's slug using the ``/api/posts`` route. More documentation is available at ``/api-docs`` on the live version.

The server skips request validation (which could be done with express-validation) as it could also be implemented on the client. 
I.E Requiring passwords to be 8+ characters

## Branches
Main/Master - Doesn't use a database for user login/signup

MongoDB - Uses MongoDB with Mongoose for user login/signup

## Authentication
Send a ``POST`` request to ``/users/login`` with the following JSON. A JSON web token will be sent in the response.
```json
{
"username": "username",
"password": "password"
}
```

## Docs
API documentation for ``main`` repo uses Swagger and is available at: 
[api-docs](https://digital-api.herokuapp.com/api-docs/)

## Live Version

Auto deployed with GitHub Actions
[Heroku](https://digital-api.herokuapp.com/)