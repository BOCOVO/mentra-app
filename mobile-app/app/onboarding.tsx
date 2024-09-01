import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { onboardingSteps } from "data/onboarding";
import OnboardingCard from "components/onboarding/OnboardingCard";
import { YStack } from "tamagui";
import AuthWithGoogleButton from "components/ui/Button/AuthWithGoogleButton";
import { useAuthWithGoogle } from "hooks/authWithGoogle";
import { useLogin } from "hooks/login";

const screenWidth = Math.round(Dimensions.get("window").width);

const Onboarding = () => {
  const { t } = useTranslation();

  const { loading, execLoginMutation } = useLogin();

  const { signIn } = useAuthWithGoogle(execLoginMutation);

  return (
    <SafeAreaView style={styles.viewport}>
      <YStack style={styles.wrapper}>
        <FlatList
          style={styles.slider}
          horizontal
          snapToAlignment="start"
          data={onboardingSteps}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.sliderItemsWrapper}
          renderItem={({ item }) => (
            <OnboardingCard
              width={screenWidth}
              title={t(item.title)}
              description={t(item.description)}
              image={item.image}
            />
          )}
        />
        <YStack marginBottom={50} paddingHorizontal="$4">
          <AuthWithGoogleButton loading={loading} onPress={signIn} />
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  viewport: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  slider: {
    flex: 1,
  },
  sliderItemsWrapper: {
    display: "flex",
    alignItems: "center",
  },
});
