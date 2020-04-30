import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = '@AmamenteAVida:token';

export const onSignIn = (value) => AsyncStorage.setItem(TOKEN_KEY, value);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = () => {
  const token = AsyncStorage.getItem(TOKEN_KEY);

  return token !== null;
};

export const valueToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token;
};
