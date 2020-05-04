export const SET_JWT = 'login/SET_JWT';
export const SET_CLIENT = 'login/SET_CLIENT';
export const SET_DONO = 'dono/SET_DONO';

export const setJwt = (jwt) => ({
  type: SET_JWT,
  payload: jwt,
});

export const setClient = (client) => ({
  type: SET_CLIENT,
  payload: client,
});

export const setDono = (dono) => ({
  type: SET_DONO,
  payload: dono,
});
