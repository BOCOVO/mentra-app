import { appSchema } from "@nozbe/watermelondb";
import { transactionSchema } from "./transaction";
import { categorySchema } from "./category";

export default appSchema({
  version: 1,
  tables: [transactionSchema, categorySchema],
});
