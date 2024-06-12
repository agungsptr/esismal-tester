import axios, { type AxiosResponse } from "axios";
import config from "../config";

export async function auth(): Promise<string> {
  const data = {
    username: config.PKM_ACC.username,
    password: config.PKM_ACC.password,
  };

  const axiosConfig = {
    method: "post",
    url: `${config.BASE_URL}/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data,
  };
  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Logis success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
