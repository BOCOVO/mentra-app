import { View, XStack } from "tamagui";
import {
  CategoryIconComponentMap,
  CategoryIconKeyName,
} from "./icons/CategoryIcon";

import CategoryIconCard from "./icons/CategoryIconCard";
import { TouchableOpacity } from "react-native";

const defaultIconsKeys = Object.keys(CategoryIconComponentMap);

interface CategoryIconPickerProps {
  selectedKey?: string;
  onSelect?: (key: CategoryIconKeyName) => void;
}

const CategoryIconPicker = ({
  onSelect,
  selectedKey,
}: CategoryIconPickerProps) => {
  return (
    <XStack flexWrap="wrap" gap="$1">
      {defaultIconsKeys.map((key) => {
        const isSelected = selectedKey === key;

        return (
          <TouchableOpacity
            onPress={() => {
              onSelect?.(key as CategoryIconKeyName);
            }}
            key={key}
          >
            <View
              borderStyle="solid"
              borderRadius="$6"
              padding="$2"
              borderWidth="$1"
              borderColor={isSelected ? "$violet.100" : "transparent"}
            >
              <CategoryIconCard
                iconProps={{ width: 28, height: 28 }}
                iconName={key as CategoryIconKeyName}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </XStack>
  );
};

export default CategoryIconPicker;
