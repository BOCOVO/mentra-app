import BackIcon from "components/svg/BackIcon";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SizableText, XStack } from "tamagui";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <XStack py="$6" px="$4" alignItems="center">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <BackIcon />
      </TouchableOpacity>
      <SizableText color="white" size="$title3" flex={1} textAlign="center">
        {title}
      </SizableText>
    </XStack>
  );
};

export default Header;
