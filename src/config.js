import { config } from "dotenv";
config();

export default {
  mongodburl: process.env.MONGODB_URI || "mongodb://Localhost/tasksdb",
};
