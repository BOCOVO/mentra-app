import { Database } from "@nozbe/watermelondb";
import {
  compose,
  withDatabase,
  withObservables,
} from "@nozbe/watermelondb/react";

import Select from "components/ui/Inputs/Select/Select";
import { Category } from "db/models/category";
import { Formik } from "formik";
import CategoryIconCard from "./icons/CategoryIconCard";
import { CategoryIconKeyName } from "./icons/CategoryIcon";
import { SizableText, View, XStack } from "tamagui";
import CreateCategoryFormModal from "./CreateCategoryFormModal";
import { useTranslation } from "react-i18next";

interface UserCategoryPicker {
  categories: Category[];
  name: string;
}

const UserCategoryPicker = ({ categories, name }: UserCategoryPicker) => {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <XStack columnGap="$2">
        <View flex={1}>
          <Select
            name={name}
            items={categories}
            getLabel={(item) => item.title}
            getKey={(item) => item.id}
            itemProps={{ height: 60 }}
            placeholder={t("category.title")}
            renderItem={(cat) => (
              <Option
                iconName={cat.iconName as CategoryIconKeyName}
                title={cat.title}
              />
            )}
          />
        </View>

        <CreateCategoryFormModal />
      </XStack>
    </Formik>
  );
};

interface OptionProps {
  iconName: CategoryIconKeyName;
  title: string;
}

const Option = ({ iconName, title }: OptionProps) => {
  return (
    <XStack columnGap="$2" alignItems="center" h={60}>
      <CategoryIconCard
        iconProps={{ width: 20, height: 20 }}
        hideTitle
        iconName={iconName! as CategoryIconKeyName}
        boxHeight={35}
        boxWidth={35}
      />

      <SizableText fontWeight="600">{title}</SizableText>
    </XStack>
  );
};

const withData = compose<any, any, any>(
  withDatabase,
  withObservables([], ({ database }: { database: Database }) => ({
    categories: database.get<Category>(Category.table).query(),
  }))
);

export default withData(UserCategoryPicker);
