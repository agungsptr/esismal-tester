import * as dotenv from "dotenv";

dotenv.config();

export default {
  BASE_URL: process.env.BASE_URL,
  PKM_ACC: {
    username: process.env.PKM_ACC_USERNAME,
    password: process.env.PKM_ACC_PASSWAORD,
  },
};
