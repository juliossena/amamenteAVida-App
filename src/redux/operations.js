import {
  login,
  sendVerificationCode,
  updatePassword,
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

export const reqUpdatePassword = (body) => async (dispatch) => {
  try {
    await updatePassword(body);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default reqLogin;
