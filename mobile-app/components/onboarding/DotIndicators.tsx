import { StyleSheet } from "react-native";
import Dot from "./Dot";
import { View } from "tamagui";

interface DotIndicatorsProps {
  itemCount: number;
  activeIndex: number;
}
const DotIndicators = ({ activeIndex, itemCount }: DotIndicatorsProps) => {
  return (
    <View columnGap="$3" style={styles.container}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <Dot active={activeIndex === index} />
      ))}
    </View>
  );
};

export default DotIndicators;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
