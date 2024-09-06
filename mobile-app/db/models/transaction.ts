import { tableSchema } from "@nozbe/watermelondb/Schema";
import { Model } from "@nozbe/watermelondb";
import { field, date, relation, text } from "@nozbe/watermelondb/decorators";
import { Category } from "./category";

export const transactionSchema = tableSchema({
  name: "transactions",
  columns: [
    { name: "title", type: "string" },
    { name: "description", type: "string" },
    { name: "amount", type: "number" },
    { name: "type", type: "string" },
    { name: "category_id", type: "string", isOptional: true },
    { name: "date", type: "number" },
  ],
});

export class Transaction extends Model {
  static table = "transactions";

  @text("title")
  title!: string;

  @text("description")
  description!: string;

  @field("amount")
  amount!: number;

  @text("type")
  type!: string;

  @relation("categories", "category_id")
  category!: Category;

  @date("date")
  date!: Date;
}
