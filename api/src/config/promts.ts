export const extractExpensesPrompt = `
From the audio extract expenses and response with an array following this schema
[
  {
    "expenseTitle": "string",
    "description": "string",
    "amount: "string",
    "category": "categoryID"
  }
]

Give as much description as possible in the description field
`;
