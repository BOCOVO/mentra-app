import { useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { useToastController } from "@tamagui/toast";
import { useTranslation } from "react-i18next";
import loginStorage from "storage/login";

const loginQuery = graphql(/* GraphQL */ `
  mutation login($token: String!) {
    login(idToken: $token) {
      token
    }
  }
`);

export const useLogin = () => {
  const [execLoginMutation, { loading, data, error }] = useMutation(loginQuery);

  const toast = useToastController();
  const { t } = useTranslation();

  const exec = async (token: string) => {
    try {
      const { data } = await execLoginMutation({
        variables: { token },
      });

      if (data?.login.token) {
        loginStorage.saveAuthToken(data.login.token);
      } else {
        toast.show(t("auth.failed"));
      }
    } catch (error) {
      toast.show(t("auth.failed"));
    }
  };

  return {
    loading,
    data,
    error,
    execLoginMutation: exec,
  };
};
