const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando com o banco de dados");

  mongoose
    .connect('mongodb+srv://root:admin@api-rickmorty.4wmbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    })
    .then(() => console.log("MongoDB Conectado!"))
    .catch((err) => console.log(`erro ao conectar com o banco ${err}`));
};

module.exports = connectDatabase