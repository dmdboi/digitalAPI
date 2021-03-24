## DigitalAPI

## Branches
Main/Master - Doesn't use a database for user login/signup
MongoDB - Uses MongoDB with Mongoose for user login/signup
Swagger - Includes documentation via Swagger for API endpoints

## Usage
For Main/Master

```
username: username
password: password
```

For MongoDB
Create a new user via ``/users/register`` with username and password.
Use username and password to login via ``/users/login``

## Docs
API documentation uses Swagger and is available at: 
``http://localhost:3000/api-docs``

## Live Versions