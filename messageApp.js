const path = require('path')
const express = require('express');
const sanitize = require('express-mongo-sanitize');
const helmet = require("helmet");
const cookieParser = require('cookie-parser')

const mainRouter = require('./router/mainRouter')
const AppError = require('./utils/appError');
// const globalErrorController = require('./controller/errorController'); // Global Error controller

const app = express()

//Sanitising mongoose queries
app.use(sanitize());
app.use(helmet());
//Parsing BOdy data in JSON
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});
app.use(mainRouter);

// app.all("*", function (req, res, next) {
//     res.status(301).redirect('http://localhost:3000')
//     return next(new AppError("Sorry we did not find your page!", 404));
// });

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "/index.html")
    );
});

//Adding Globule Error handler
// app.use(globalErrorController);

module.exports = app;