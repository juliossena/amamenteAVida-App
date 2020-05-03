import {
  ConectarApiPost,
  ConectarApiGet,
  ConectarApiPatch,
  URL_LOGIN,
  URL_FORGOT,
  URL_CHANGE_PASSWORD,
  URL_CLIENT,
} from '../shared/functions/conection';
import { generateQueryString } from '../utils/service';

export async function login(body) {
  const respostaServico = await ConectarApiPost(URL_LOGIN, body);
  return respostaServico.headers.authorization;
}

export async function sendVerificationCode(body) {
  const url = generateQueryString(URL_FORGOT, body);
  const respostaServico = await ConectarApiGet(url);
  return respostaServico.headers.authorization;
}

export async function updatePassword(body) {
  const respostaServico = await ConectarApiPatch(URL_CHANGE_PASSWORD, body);
  return respostaServico.headers.authorization;
}

export async function getClient() {
  const respostaServico = await ConectarApiGet(URL_CLIENT);
  return respostaServico.data;
}

export default login;
