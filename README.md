## DigitalAPI

This is a node API using the Express framework to get posts from [wpengine](https://dinotest.wpengine.com/wp-json/wp/v2/posts).

## Features
- User authentication using JWT tokens
- API documentation using Swagger. 
- Get All Posts or Post by ID/Slug

## Branches

Main/Master - Doesn't use a database for user login
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

Built on top of [Diamond express](https://github.com/dmdboi/diamond-express)