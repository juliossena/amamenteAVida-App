export const SET_JWT = 'login/SET_JWT';

export const setJwt = (jwt) => ({
  type: SET_JWT,
  payload: jwt,
});
