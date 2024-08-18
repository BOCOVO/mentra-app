import { SizableText } from "tamagui";
import { useTranslation } from "react-i18next";

const Onboarding = () => {
  const { t } = useTranslation();

  return <SizableText>{t("onboarding.title")}</SizableText>;
};

export default Onboarding;
