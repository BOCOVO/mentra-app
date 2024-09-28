import { createTransaction } from "db/helpers/transaction";
import ExpenseForm from "./ExpenseForm";
import { useTranslation } from "react-i18next";
import { useToastController } from "@tamagui/toast";

const CreateTransactionForm = () => {
  const { t } = useTranslation();
  const toast = useToastController();

  const saveTransaction = async (
    values: Parameters<typeof createTransaction>[0]
  ) => {
    try {
      return await createTransaction(values);
    } catch (error) {
      toast.show(t("expense.saving-failed"));
      throw error;
    }
  };

  return <ExpenseForm onSubmit={saveTransaction} />;
};

export default CreateTransactionForm;
