import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
  User,
} from "@react-native-google-signin/google-signin";
import { GOOGLE_AUTH_WEB_CLIENT_ID } from "constants/envs";
import { useEffect } from "react";

export const useAuthWithGoogle = (onSuccess?: (user: User) => void) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_AUTH_WEB_CLIENT_ID,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onSuccess?.(userInfo);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            break;
          case statusCodes.IN_PROGRESS:
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            break;
          default:
        }
      } else {
        // show toast
      }
    }
  };

  return { signIn };
};
