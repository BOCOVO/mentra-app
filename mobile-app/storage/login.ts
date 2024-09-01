import AsyncStorage from "@react-native-async-storage/async-storage";

export class LoginStorage {
  saveAuthToken(token: string): Promise<void> {
    return AsyncStorage.setItem("aut-token", token);
  }

  getAuthToken(): Promise<string | null> {
    return AsyncStorage.getItem("aut-token");
  }

  deleteAuthToken(): Promise<void> {
    return AsyncStorage.removeItem("aut-token");
  }
}

const loginStorage = new LoginStorage();

export default loginStorage;
