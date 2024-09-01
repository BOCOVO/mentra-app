import "../tamagui-web.css";
import Constants from "expo-constants";

import { PropsWithChildren, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "./Provider";
import "../i18n/i18n";
import ApolloProvider from "providers/ApolloProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Wrapper({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    InterSemiBold: require("@tamagui/font-inter/otf/Inter-SemiBold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <Provider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ApolloProvider>{children}</ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
}

function AppContent() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" />

      <Stack.Screen name="index" />

      <Stack.Screen name="onboarding" />
    </Stack>
  );
}

let AppEntryPoint = () => (
  <Wrapper>
    <AppContent />
  </Wrapper>
);

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  const Storybook = require("../.storybook").default;
  AppEntryPoint = () => (
    <Wrapper>
      <Stack.Screen></Stack.Screen>
      <Storybook />
    </Wrapper>
  );
}

export default AppEntryPoint;
