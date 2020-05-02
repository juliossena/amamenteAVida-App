import {
  SET_JWT,
} from './actions';
import { onSignIn } from '../shared/functions/auth';

const INITIAL_STATE = {
  jwt: null,
};

export default (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case SET_JWT:
      onSignIn(action.payload);

      return {
        ...state,
        jwt: action.payload,
      };
    default:
      return state;
  }
};
