import axios, { type AxiosResponse } from "axios";
import config from "../config";

export async function cadreCreate(token: string): Promise<Record<string, any>> {
  const data = {
    fasyankes_id: "1010001|PUSKESMAS TEUPAH SELATAN",
    is_foreign_nationality: "Tidak",
    not_have_ktp: "Tidak",
    ktp: "6218763727891732",
    cadre_origin: "Bukan Perdhaki",
    name: "test cadre",
    age: "21",
    gender: "Laki Laki",
    last_education: "Doktor",
    is_sk_cadre: "Tidak",
    last_training_date: "2024-06-01",
    village_assignment: ["1101010001|LATIUNG"],
    fund_source_cadre: "APBD",
    cadre_tupoksi: ["Penemuan Kasus", "Promkes"],
  };

  const axiosConfig = {
    method: "post",
    url: `${config.BASE_URL}/cadre?device=Online`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Create cadre success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
