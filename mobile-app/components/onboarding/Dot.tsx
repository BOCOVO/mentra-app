import { View } from "tamagui";

interface DotProps {
  active: boolean;
}

const Dot = ({ active }: DotProps) => {
  const size = active ? 16 : 10;
  return (
    <View
      h={size}
      w={size}
      backgroundColor={active ? "$violet.100" : "$violet.40"}
      borderRadius="$10"
    />
  );
};

export default Dot;
