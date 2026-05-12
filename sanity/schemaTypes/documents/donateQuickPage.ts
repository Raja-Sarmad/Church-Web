import { defineArrayMember, defineField, defineType } from "sanity";

export const donateQuickPage = defineType({
  name: "donateQuickPage",
  title: "Donate Quick Widget",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "leftImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "leftMessage", type: "text", rows: 3 }),
    defineField({ name: "amountTitle", type: "string" }),
    defineField({ name: "currencySymbol", type: "string" }),
    defineField({ name: "defaultAmount", type: "number" }),
    defineField({ name: "amountOptions", type: "array", of: [defineArrayMember({ type: "number" })] }),
    defineField({ name: "otherLabel", type: "string" }),
    defineField({ name: "confirmButtonLabel", type: "string" }),
    defineField({ name: "modalTitle", type: "string" }),
    defineField({ name: "totalLabel", type: "string" }),
    defineField({ name: "modalConfirmButtonLabel", type: "string" }),
    defineField({ name: "paymentMethods", type: "array", of: [defineArrayMember({ type: "paymentMethod" })] }),
  ],
});
