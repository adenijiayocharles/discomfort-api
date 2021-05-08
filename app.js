const express = require("express");
const app = express();
const sequelize = require("./connection/db");
const errorHandler = require("./utilities/errorHandler");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure routes
const accountRouter = require("./routes/account");
const recordRouter = require("./routes/painlog");
const postRouter = require("./routes/post");
const messageRouter = require("./routes/message");

app.use("/account", accountRouter);
app.use("/record", recordRouter);
app.use("/post", postRouter);
app.use("/message", messageRouter);

//error handling
app.use((error, req, res, next) => {
    errorHandler(error, req, res, next);
});

app.listen(`${PORT}`, async () => {
    console.log(`Server started, listening on PORT ${PORT}`);
    await sequelize.authenticate();
});
