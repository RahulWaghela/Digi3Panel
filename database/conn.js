const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect('mongodb+srv://sejal:PJLYvnOSauidRbgg@cluster0.cyncaox.mongodb.net/?retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://RahulWaghela:physics.h123@cluster0.wcnvqgq.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected successfully.");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


