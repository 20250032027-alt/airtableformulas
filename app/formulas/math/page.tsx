import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Percentage of Total",
    "use": "Calculate what percentage one number is of another.",
    "formula": "IF({Total} = 0, 0, ROUND({Amount} / {Total} * 100, 1))",
    "note": "The IF guard prevents a divide-by-zero error when Total is empty or zero."
  },
  {
    "name": "Round to Two Decimal Places",
    "use": "Clean up currency or measurement fields that have too many decimals.",
    "formula": "ROUND({Amount}, 2)",
    "note": "Use 0 for whole numbers, negative numbers to round to tens or hundreds (ROUND(x, -1) rounds to nearest 10)."
  },
  {
    "name": "Cap a Value at a Maximum",
    "use": "Prevent a calculated field from exceeding a ceiling.",
    "formula": "MIN({Value}, 100)",
    "note": "MIN returns the smaller of the two arguments, which effectively caps the value at 100."
  },
  {
    "name": "Clamp Between Min and Max",
    "use": "Keep a value within a defined range, like 0 to 100.",
    "formula": "MAX(0, MIN({Score}, 100))",
    "note": "MIN caps the top, MAX floors the bottom. Common for scores, percentages, and ratings."
  },
  {
    "name": "Absolute Value",
    "use": "Remove the sign from a number so negatives become positive.",
    "formula": "ABS({Variance})",
    "note": "Useful when you care about how different two numbers are, not which direction."
  },
  {
    "name": "Markup Price from Cost",
    "use": "Calculate a selling price from a cost with a percentage markup.",
    "formula": "ROUND({Cost} * (1 + {Markup %} / 100), 2)",
    "note": "Stores the markup as a plain number (20 for 20%). If stored as a decimal (0.2), remove the /100."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Math & Numbers Formulas"
      description="Rounding, percentages, capping values, markup calculations. Airtable handles numbers well once you know the right functions."
      formulas={formulas}
    />
  );
}
