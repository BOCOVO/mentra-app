import { SizableText, Text, YStack } from "tamagui";
import CategoryIcon, {
  CategoryIconComponentMap,
  CategoryIconKeyName,
} from "./CategoryIcon";
import { CommonCategoryIconProps } from "types/category";
import { useTranslation } from "react-i18next";

interface CategoryIconProps {
  iconName: CategoryIconKeyName ;
  iconProps?: CommonCategoryIconProps;
}

const CategoryIconCard = ({ iconName, iconProps }: CategoryIconProps) => {
  const { t } = useTranslation();

  const colorConfig = CategoryIconComponentMap[iconName]
  const iconTitle = t(`category.icons-title.${iconName}`, { defaultValue: "" });

  return (
    <YStack borderRadius="$4" width={70} minHeight={70} padding="$2" justifyContent="center" alignItems="center" bg={colorConfig.bg}>
      <CategoryIcon
        color={colorConfig.color}
        iconName={iconName}
        {...iconProps}
      />

      {iconTitle ? <SizableText numberOfLines={1} textAlign="center" fontSize={11} color={colorConfig.color} >{iconTitle}</SizableText> : null}
    </YStack>
  );
};

export default CategoryIconCard;
