import axios, { type AxiosResponse } from "axios";
import config from "../config";

export async function regmalCreate(token: string, cadre: Record<string, any>) {
  const data = {
    is_foreign_nationality: "Tidak",
    not_have_ktp: "Tidak",
    ktp: "11",
    name: "test",
    dob: "1999-07-01",
    age: 22,
    age_type: "Tahun",
    gender: "Laki Laki",
    pregnancy: "Hamil",
    province_id: "11|ACEH",
    district_id: "1101|SIMEULUE",
    subdistrict_id: "1101010|TEUPAH SELATAN",
    fasyankes_id: "1010001|PUSKESMAS TEUPAH SELATAN",
    fasyankes_origin_id: "1010001|PUSKESMAS TEUPAH SELATAN",
    oap: "Orang Asli Papua (OAP)",
    urbanvillage_id: "1101010001|LATIUNG",
    sub_village: "test",
    address: "test",
    is_domicile_outside: "Ya",
    domicile_province_id: "11|ACEH",
    domicile_district_id: "1101|SIMEULUE",
    case_from: "Faskes Pencatat",
    discovery_activities: "PCD",
    house_visit: "Kader",
    cadres_id: [`${cadre.id}`],
    lab_checking_type: "Mikroskop",
    total_rdt: "1",
    slide_code: "1101/1010001/1/06/2022",
    patient_visite_date: "2023-11-20",
    lab_checking_date: "2022-06-20",
    parasyte: ["P.Vivax", "P.Falciparum"],
    job: "Nelayan",
    disease_degree: "Tanpa Komplikasi",
    body_temperature: "12",
    sympthomatic: "Tidak Bergejala",
    gametosit: "Negatif",
    parasyte_density: "12",
    weight: "12",
    medication: {
      dhp_tablet: "1",
      primaquin_tablet: "1",
      kina_tablet: "1",
      artesunat_injeksi: "1",
      kina_injeksi: "1",
      doksisiklin: "1",
    },
    medication_date: "2022-06-20",
    treatment: "Rawat Inap",
    death_with_malaria: "Tidak",
    referred_to_other_faskes: "Tidak",
    standard_medication_status: "Standard",
  };

  const axiosConfig = {
    method: "post",
    url: `${config.BASE_URL}/regmal?device=Online`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Create regmal success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function regmalGetById(token: string, regmalId: string) {
  const axiosConfig = {
    method: "get",
    url: `${config.BASE_URL}/regmal/id/${regmalId}?device=Online`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Get regmal by id success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function regmalUpdateById(token: string, regmalId: string) {
  const data = {
    age: 30,
  };

  const axiosConfig = {
    method: "patch",
    url: `${config.BASE_URL}/regmal/id/${regmalId}?device=Online`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    data,
  };

  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Update regmal by id success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function regmalDeleteById(token: string, regmalId: string) {
  const axiosConfig = {
    method: "delete",
    url: `${config.BASE_URL}/regmal/${regmalId}?device=Online`,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  return axios
    .request(axiosConfig)
    .then((res: AxiosResponse) => {
      console.log(`Delete regmal by id success`);
      return res.data.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
