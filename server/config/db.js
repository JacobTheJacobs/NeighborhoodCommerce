const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongo ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongo ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToMongo;
