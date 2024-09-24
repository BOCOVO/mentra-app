import { createCategory } from "db/helpers/category";
import CategoryFormModal from "./CategoryFormModal";
import { useTranslation } from "react-i18next";
import { useToastController } from "@tamagui/toast";

const CreateCategoryFormModal = () => {
  const {t} = useTranslation();
  const toast = useToastController()

  const saveCategory = async (values: Parameters<typeof createCategory>[0]) => {
    try {
      return await createCategory(values);
    } catch (error) {
      toast.show(t("category.saving-failed"))
      throw error
    }
  };
  return <CategoryFormModal onChange={saveCategory} />;
};

export default CreateCategoryFormModal;
