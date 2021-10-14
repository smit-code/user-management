const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("  Database Connected on 'USER_MANAGEMENT_TASK'");
  })
  .catch((err) => {
    console.log(err);
  });
