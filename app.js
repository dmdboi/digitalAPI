const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const config = require("./config/config")

const app = express();

// Swagger API documentation
const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const specs = swaggerJSdoc(require("./config/swagger"));

// If accessing through a client that isn't on the same Origin, add cors.
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/api", require("./routes/api"));

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, {
    explorer: true
  })
);

// Default Error Handler. 
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send({ message: "Something went wrong with this request" });
});


app.listen(config.PORT, () => {
    console.log(`Server start on PORT: ${config.PORT}`)
})