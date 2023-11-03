import mongoose from "mongoose";
let isConnected = false; // connection status is off

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // set strict query to true

  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error);
  }
};
