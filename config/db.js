const mongoose = require("mongoose");

mongoose.connect(
  " mongodb+srv://avijit1:OeAdg3suFLEc5z2p@cluster0.seesin9.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeded");
    } else {
      console.log("Error in DB conncection: " + err);
    }
  }
);

require("../models/seance.model");
