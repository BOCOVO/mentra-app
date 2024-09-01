import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useToastController } from "@tamagui/toast";
import { GOOGLE_AUTH_WEB_CLIENT_ID } from "constants/envs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useAuthWithGoogle = (onSuccess?: (user: string) => void) => {
  const toast = useToastController();
  const { t } = useTranslation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_AUTH_WEB_CLIENT_ID,
    });
  }, []);

  const showFailedToast = () => {
    toast.show(t("auth.auth-with-google.failed-auth"));
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.idToken) {
        onSuccess?.(userInfo.idToken);
      } else {
        showFailedToast();
      }
    } catch (error) {
      showFailedToast();
    }
  };

  return { signIn };
};
