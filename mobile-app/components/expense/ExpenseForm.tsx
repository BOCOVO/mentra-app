import UserCategoryPickerField from "components/category/UserCategoryPickerField";
import Button from "components/ui/Button/Button";
import TextArea from "components/ui/Inputs/TextInput/TextArea";
import TextInput from "components/ui/Inputs/TextInput/TextInput";
import Header from "components/ui/Screen/Header";
import { Formik, FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native";
import { ScrollView, SizableText, YStack } from "tamagui";
import { createExpenseFormValidation } from "utils/validationSchema/createExpense";

interface FormValue {
  category: string;
  amount: number;
  title: string;
  description: string;
}

const initialValue = {
  category: "",
  amount: 0,
  title: "",
  description: "",
};

interface ExpenseFormProps {
  onSubmit: (values: FormValue) => Promise<void>;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const { t } = useTranslation();

  const handleSubmit = async (
    values: FormValue,
    formikHelpers: FormikHelpers<FormValue>
  ) => {
    await onSubmit(values);
    formikHelpers.resetForm();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} bg={"$red.100"}>
        <Header title={t("expense.screen-title")} />

        <Formik<FormValue>
          validationSchema={createExpenseFormValidation}
          onSubmit={handleSubmit}
          initialValues={initialValue}
        >
          {({ isSubmitting, submitForm }) => (
            <>
              <YStack mt="$8" px="$4" rowGap="$2">
                <SizableText
                  opacity={0.64}
                  fontWeight="700"
                  fontSize={18}
                  color="$light.80"
                >
                  {t("expense.how-much")}
                </SizableText>

                <TextInput
                  name="amount"
                  cursorColor="$white"
                  fontSize={35}
                  fontWeight="700"
                  placeholderTextColor="#fff7"
                  color="white"
                  placeholder="Enter the amount"
                  unstyled
                />
              </YStack>

              <YStack
                mt="$4"
                borderTopLeftRadius={30}
                borderTopEndRadius={30}
                p="$4"
                bg="white"
                flex={1}
              >
                <ScrollView flex={1}>
                  <YStack rowGap="$4">
                    <TextInput
                      placeholder={t("expense.expense-title")}
                      name="title"
                    />

                    <TextArea
                      placeholder={t("expense.expense-des")}
                      name="description"
                    />

                    <UserCategoryPickerField name="category" label="Category" />
                  </YStack>
                </ScrollView>

                <Button
                  loading={isSubmitting}
                  onPress={submitForm}
                  theme="primary_btn"
                >
                  {t("common.continue")}
                </Button>
              </YStack>
            </>
          )}
        </Formik>
      </YStack>
    </SafeAreaView>
  );
};

export default ExpenseForm;
