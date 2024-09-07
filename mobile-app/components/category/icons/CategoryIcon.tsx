import { CommonCategoryIconProps } from "types/category";
import Clothes from "./Clothe";
import Expense from "./Expense";
import Food from "./Food";
import Medical from "./Medical";
import Shopping from "./Shopping";
import Subscription from "./Subscription";
import Transportation from "./Transportation";
import Graduation from "./Graduation";
import { colors } from "tamagui.config";

export const CategoryIconComponentMap = {
  shopping: {
    component: Shopping,
    color: colors["yellow.100"],
    bg: colors["yellow.20"],
  },
  clothes: {
    component: Clothes,
    color: colors["light.100"],
    bg: colors["dark.100"],
  },
  expense: {
    component: Expense,
    color: colors["red.100"],
    bg: colors["red.20"],
  },
  food: {
    component: Food,
    color: colors["violet.100"],
    bg: colors["violet.20"],
  },
  medical: {
    component: Medical,
    color: colors["green.100"],
    bg: colors["green.20"],
  },

  transportation: {
    component: Transportation,
    color: colors["yellow.100"],
    bg: colors["yellow.20"],
  },
  subscription: {
    component: Subscription,
    color: colors["red.100"],
    bg: colors["red.20"],
  },
  graduation: {
    component: Graduation,
    color: colors["blue.100"],
    bg: colors["blue.20"],
  },
};

export type CategoryIconKeyName = keyof typeof CategoryIconComponentMap;

interface CategoryIconProps extends CommonCategoryIconProps {
  iconName: CategoryIconKeyName & string;
}

const CategoryIcon = ({ iconName, ...restProps }: CategoryIconProps) => {
  const IconComponent = CategoryIconComponentMap[iconName];

  if (IconComponent) return <IconComponent.component {...restProps} />;

  return <Expense {...restProps} />;
};

export default CategoryIcon;
