const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mean-employes",{
    useUnifiedTopology:true,
    useNewUrlParser:true
  })
  .then((db) => console.log("DB CONNECT"))
  .catch((err) => console.log(err));
