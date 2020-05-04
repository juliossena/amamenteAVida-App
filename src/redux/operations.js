import {
  login,
  sendVerificationCode,
  updatePassword,
  getClient,
  insertDono,
} from './service';
import * as loginActions from './actions';

export const reqLogin = (body) => async (dispatch) => {
  try {
    const jwt = await login(body);
    dispatch(loginActions.setJwt(jwt));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reqVerificationCode = (body) => async (dispatch) => {
  try {
    const jwt = await sendVerificationCode(body);
    dispatch(loginActions.setJwt(jwt));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reqUpdatePassword = (body) => async () => {
  try {
    await updatePassword(body);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reqGetClient = () => async (dispatch) => {
  try {
    const result = await getClient();
    dispatch(loginActions.setClient(result));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reqInsertDono = (body) => async (dispatch) => {
  try {
    const result = await insertDono(body);
    dispatch(loginActions.setDono(result));
  } catch (error) {
    throw new Error(error.message);
  }
};

export default reqLogin;
