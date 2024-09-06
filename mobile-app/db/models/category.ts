import { tableSchema } from "@nozbe/watermelondb/Schema";
import { Model } from "@nozbe/watermelondb";
import { children, field } from "@nozbe/watermelondb/decorators";
import type { Transaction } from "./transaction";
import { HasManyAssociation } from "@nozbe/watermelondb/Model";

export const categorySchema = tableSchema({
  name: "categories",
  columns: [
    { name: "title", type: "string" },
    { name: "is_common_category", type: "boolean" },
    { name: "icon_name", type: "string", isOptional: true },
  ],
});

export class Category extends Model {
  static table = "categories";

  static associations = {
    transactions: {
      type: "has_many",
      foreignKey: "category_id",
    } as HasManyAssociation,
  };

  @field("title")
  title!: string;

  @field("is_common_category")
  isCommonCategory!: boolean;

  @field("icon_name")
  iconName?: string;

  @children("transactions")
  transactions!: Transaction[];
}
