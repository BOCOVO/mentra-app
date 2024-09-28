import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />

      <Tabs.Screen name="transactions" />

      <Tabs.Screen name="settings" />

      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
