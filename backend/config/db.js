const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: "__dirname"+"../../config.env"});

const connectDB = async () => {
  try {
    const url = "mongodb+srv://VatsalAjmeri:20dcs001@cluster0.utnvsau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    console.log(__dirname);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
