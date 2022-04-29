const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando com o banco de dados");

  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    })
    .then(() => console.log("MongoDB Conectado!"))
    .catch((err) => console.log(`erro ao conectar com o banco ${err}`));
};

module.exports = connectDatabase;
