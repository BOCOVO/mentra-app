import { Link } from "expo-router";
import { SafeAreaView } from "react-native";
import { SizableText } from "tamagui";

const Index = () => {
  return (
    <SafeAreaView>
      <SizableText paddingTop={200}>
        Index app
        <Link href="onboarding">Onbarding</Link>
        <Link href="expense/create">Create Expense</Link>
      </SizableText>
    </SafeAreaView>
  );
};

export default Index;
