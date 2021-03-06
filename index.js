require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./src/database/database");
const userRoute = require("./src/users/route/user.route");
const characterRoute = require("./src/characters/route/characters.route");
const authRoute = require("./src/auth/auth.route");
const swaggerRoute = require("./src/swagger/swagger.route");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/characters", characterRoute);
app.use("/auth", authRoute);
app.use("/api-docs", swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
