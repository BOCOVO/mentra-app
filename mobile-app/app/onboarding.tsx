import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { onboardingSteps } from "data/onboarding";
import OnboardingCard from "components/onboarding/OnboardingCard";
import { YStack } from "tamagui";
import AuthWithGoogleButton from "components/ui/Button/AuthWithGoogleButton";
import { useAuthWithGoogle } from "hooks/authWithGoogle";
import { useLogin } from "hooks/login";
import { useState } from "react";
import DotIndicators from "components/onboarding/DotIndicators";

const screenWidth = Math.round(Dimensions.get("window").width);

const Onboarding = () => {
  const { t } = useTranslation();

  const { loading, execLoginMutation } = useLogin();

  const { signIn } = useAuthWithGoogle(execLoginMutation);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView style={styles.viewport}>
      <YStack style={styles.wrapper}>
        <FlatList
          style={styles.slider}
          horizontal
          data={onboardingSteps}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.sliderItemsWrapper}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
          onViewableItemsChanged={({ viewableItems, changed }) => {
            const currentIndex = viewableItems.at(0)?.index;
            if (currentIndex !== null && currentIndex !== undefined) {
              setCurrentIndex(currentIndex);
            }
          }}
          renderItem={({ item }) => (
            <OnboardingCard
              width={screenWidth}
              title={t(item.title)}
              description={t(item.description)}
              image={item.image}
            />
          )}
        />

        <DotIndicators
          itemCount={onboardingSteps.length}
          activeIndex={currentIndex}
        />

        <YStack mt="$6" marginBottom={50} paddingHorizontal="$4">
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
