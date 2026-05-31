import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Count Selected Options",
    "use": "Count how many options are selected in a multi-select field.",
    "formula": "IF({Tags} = \"\", 0, LEN({Tags}) - LEN(SUBSTITUTE({Tags}, \",\", \"\")) + 1)",
    "note": "Multi-select values are stored as comma-separated text. Counting commas plus one gives the number of items."
  },
  {
    "name": "Check if Specific Option is Selected",
    "use": "Return true if a multi-select field contains a particular option.",
    "formula": "IF(FIND(\"Urgent\", {Tags}), TRUE(), FALSE())",
    "note": "FIND checks if the string exists anywhere in the field value. Works for exact option names."
  },
  {
    "name": "First Selected Option",
    "use": "Extract just the first value from a multi-select field.",
    "formula": "IF(FIND(\",\", {Tags}), LEFT({Tags}, FIND(\",\", {Tags}) - 1), {Tags})",
    "note": "If there's no comma (only one option), returns the full value. Otherwise returns everything before the first comma."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Array & Multi-Select Formulas"
      description="Working with multi-select fields, counting options, checking for specific values."
      formulas={formulas}
    />
  );
}
