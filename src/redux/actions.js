export const SET_JWT = 'login/SET_JWT';
export const SET_CLIENT = 'login/SET_CLIENT';

export const setJwt = (jwt) => ({
  type: SET_JWT,
  payload: jwt,
});

export const setClient = (client) => ({
  type: SET_CLIENT,
  payload: client,
});
