import { auth } from "./module/auth.module";
import { cadreCreate } from "./module/cadre.module";
import {
  regmalCreate,
  regmalDeleteById,
  regmalGetById,
  regmalUpdateById,
} from "./module/regmal.module";

async function test() {
  // Login test
  const token = await auth();

  // Cadre test
  const cadre = await cadreCreate(token);

  // Regmal test case
  const regmal = await regmalCreate(token, cadre);
  await regmalGetById(token, regmal.id);
  await regmalUpdateById(token, regmal.id);
  await regmalDeleteById(token, regmal.id);

  console.log("Testing done");
}

test();
