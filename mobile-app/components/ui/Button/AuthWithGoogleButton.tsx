import { useTranslation } from "react-i18next";
import { Button, Image, SizableText, Spinner } from "tamagui";

const googleIcon = require("../../../assets/icons/flat-color-icons_google.png");

interface AuthWithGoogleButtonProps {
  onPress: () => void;
  loading?: boolean;
}

const AuthWithGoogleButton = ({
  onPress,
  loading,
}: AuthWithGoogleButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      display="flex"
      justifyContent="center"
      theme="google_btn"
      borderWidth={1}
      borderRadius={16}
      height={56}
      borderColor="$light.60"
      onPress={onPress}
    >
      {loading ? (
        <Spinner size="small" color="$violet.100" />
      ) : (
        <Image width={32} height={32} src={googleIcon} />
      )}

      <SizableText color="$color.dark.50" size="$title3">
        {t("auth.auth-with-google.label")}
      </SizableText>
    </Button>
  );
};

export default AuthWithGoogleButton;
