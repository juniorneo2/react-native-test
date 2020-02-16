
import AsyncStorage from '@react-native-community/async-storage';

export const put = async (key, data) => await AsyncStorage.setItem(key, data);
export const get = async key => await AsyncStorage.getItem(key);
export const remove = async key => await AsyncStorage.removeItem(key);
