import Axios from 'axios';
import * as Constants from '../../../utils/constants';
import { valueToken } from '../auth';

export default class Conecta {
  static async chamada(url, metodo, body) {
    let resposta;
    let config = {};
    const jwt = await valueToken();
    try {
      config = {
        headers: {
          Authorization: jwt,
          'Content-Type': 'application/json',
        },
      };
    } catch (e) {
      config = {};
    }

    switch (metodo) {
      case Constants.GET:
        resposta = Axios.get(url, config);
        break;
      case Constants.POST:
        resposta = Axios.post(url, body, config);
        break;
      case Constants.DELETE:
        resposta = Axios.delete(url, config);
        break;
      case Constants.PUT:
        resposta = Axios.put(url, body, config);
        break;
      case Constants.PATCH:
        resposta = Axios.patch(url, body, config);
        break;
      default:
        resposta = 'Método HTTP usado para conectar a API é inválido.';
    }

    return resposta;
  }

  static async conecta(url, metodo, body) {
    return Conecta.chamada(url, metodo, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 403:
            throw new Error(Constants.EXCEPTION_ERROR_FORBIDDEN);
          case 400:
          case 404:
          case 422:
            if (error.response.data && error.response.data.message) {
              throw new Error(error.response.data.message);
            }
            break;
          case 500:
            if (error.response.data && error.response.data.mensagem
              && Conecta.deveExibirMensagem(error.response.data.mensagem)) {
              throw new Error(error.response.data.mensagem.replace(/([a-zA-Z]+)?Exception: /, ''));
            }
            throw new Error(Constants.EXCEPTION_ERRO_INTERNO);
          default:
            throw new Error(Constants.EXCEPTION_ERRO_CONEXAO);
        }
      }
      throw new Error(Constants.EXCEPTION_ERRO_CONEXAO);
    });
  }
}

export async function ConectarApiPost(url, body) {
  return Conecta.conecta(url, Constants.POST, body);
}

export async function ConectarApiPUT(url, body) {
  return Conecta.conecta(url, Constants.PUT, body);
}

export async function ConectarApiPatch(url, body) {
  return Conecta.conecta(url, Constants.PATCH, body);
}

export async function ConectarApiGet(url) {
  return Conecta.conecta(url, Constants.GET);
}

export async function ConectarApiDelete(url) {
  return Conecta.conecta(url, Constants.DELETE);
}
