import * as SecureStore from 'expo-secure-store';

export async function getStorageValue(key) {
  const value = await SecureStore.getItemAsync(key);

  return value;
}

export async function setStorageValue(key, value) {
  SecureStore.setItemAsync(key, value);
}
