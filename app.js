const express = require("express");
const app = express();
const sequelize = require("./connection/db");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configure routes
const accountRouter = require("./routes/account");

app.use("/account", accountRouter);

app.listen(`${PORT}`, async () => {
    console.log(`Server started, listening on PORT ${PORT}`);
    await sequelize.authenticate();
});
