import CreateTransactionForm from "components/expense/CreateTransactionForm";
import { StatusBar } from "react-native";
import { View } from "tamagui";

export default function CreateTransaction() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="#FD3C4A" />

      <View flex={1}>
        <CreateTransactionForm />
      </View>
    </>
  );
}
