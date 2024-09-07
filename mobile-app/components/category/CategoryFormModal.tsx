import Button from "components/ui/Button/Button";
import TextInput from "components/ui/Inputs/TextInput/TextInput";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Dialog, SizableText, Text, XStack, YStack } from "tamagui";
import CategoryIconPickerField from "./CategoryIconPickerField";
import { ReactNode, useState } from "react";
import { createCatFormValidation } from "utils/validationSchema/createNewCat";

interface FormValue {
  title: string;
  icon_name: string;
}

const defaultValues: FormValue = { title: "", icon_name: "shopping" };

interface CategoryFormModalProps {
  title?: string;
  initialValues?: FormValue;
  onChange?: (value: FormValue) => Promise<any>;
  triggerComponent?: ReactNode;
}

const CategoryFormModal = ({
  title,
  initialValues = defaultValues,
  onChange,
  triggerComponent,
}: CategoryFormModalProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => setOpen(false);

  const handleChange = async (values: FormValue) => {
    try {
      await onChange?.(values);
      closeDialog();
    } catch (error) {}
  };

  return (
    <Dialog open={open}>
      <Dialog.Trigger onPress={openDialog} asChild>
        {triggerComponent ?? <Text>{t("category.add-new-label")}</Text>}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          maxWidth="80%"
          width={400}
        >
          <Formik<FormValue>
            onSubmit={(values) => handleChange(values)}
            initialValues={initialValues}
            validationSchema={createCatFormValidation}
          >
            {({ isSubmitting, submitForm }) => (
              <YStack rowGap="$4">
                <SizableText size="$6" fontWeight="700">
                  {t(title ?? "category.adding-title")}
                </SizableText>

                <TextInput
                  autoFocus
                  placeholder={t("category.title-label")}
                  name="title"
                />
                <CategoryIconPickerField
                  label={t("category.choice-icon")}
                  name="icon_name"
                />

                <XStack gap="$3" justifyContent="flex-end">
                  <Dialog.Close asChild>
                    <Button onPress={closeDialog} theme="secondary_btn">
                      {t("modal.cancel")}
                    </Button>
                  </Dialog.Close>

                  <Dialog.Close asChild>
                    <Button
                      loading={isSubmitting}
                      onPress={submitForm}
                      theme="primary_btn"
                    >
                      {t("modal.save")}
                    </Button>
                  </Dialog.Close>
                </XStack>
              </YStack>
            )}
          </Formik>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default CategoryFormModal;
