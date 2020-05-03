import {
  SET_JWT,
  SET_CLIENT,
} from './actions';
import { onSignIn } from '../shared/functions/auth';

const INITIAL_STATE = {
  jwt: null,
  client: null,
};

export default (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case SET_JWT:
      onSignIn(action.payload);

      return {
        ...state,
        jwt: action.payload,
      };
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    default:
      return state;
  }
};
