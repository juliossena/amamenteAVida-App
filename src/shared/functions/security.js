import LocalStorageProxy from './localStorageProxy';
import { AUTHORIZATION_KEY } from '../../utils/constants';

const AUTHORIZATION_VALUE_PREFIX = 'Bearer';
const ERROR_AUTHORIZATION_VALUE_IS_INVALID = 'Valor usado para autorização é inválido.';

class security {
  static setAuthorizationToken(value) {
    if (!security.valueIsValid(value)) {
      security.unsetAuthorizationToken();
    }

    LocalStorageProxy.setItem(AUTHORIZATION_KEY, value);
  }

  static valueIsValid(value) {
    return (value
      && (typeof value === 'string' || value instanceof String)
      && value.length > 7
      && value.startsWith(AUTHORIZATION_VALUE_PREFIX));
  }

  static unsetAuthorizationToken() {
    LocalStorageProxy.removeItem(AUTHORIZATION_KEY);
  }

  static authorizationTokenExists() {
    return LocalStorageProxy.getItem(AUTHORIZATION_KEY) !== null;
  }

  static getTokenValue() {
    const value = LocalStorageProxy.getItem(AUTHORIZATION_KEY);
    if (value === null) { throw new Error(ERROR_AUTHORIZATION_VALUE_IS_INVALID); }
    return value;
  }

  static getAuthorizationValue() {
    return `${AUTHORIZATION_VALUE_PREFIX} ${security.getTokenValue()}`;
  }
}

export default security;
