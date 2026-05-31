import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "All Checkboxes Checked",
    "use": "Return true only if every checkbox in a linked set is checked.",
    "formula": "IF(COUNTIF(VALUES({Done}), FALSE()) = 0, TRUE(), FALSE())",
    "note": "Counts unchecked boxes. If zero are unchecked, all are done."
  },
  {
    "name": "Any Item Overdue",
    "use": "Flag a parent record if any of its linked records are past due.",
    "formula": "IF(COUNTIF(VALUES({Due Date}), \"< \" & TODAY()) > 0, TRUE(), FALSE())",
    "note": "Works in a Rollup field. If any linked due date is in the past, the parent gets flagged."
  },
  {
    "name": "Flip Boolean Logic",
    "use": "Invert a checkbox or boolean field.",
    "formula": "NOT({Approved})",
    "note": "Useful when you have 'Approved' but need a 'Pending' field that is the opposite."
  },
  {
    "name": "Is Weekend",
    "use": "Check whether a date falls on a Saturday or Sunday.",
    "formula": "IF(OR(WEEKDAY({Date}) = 1, WEEKDAY({Date}) = 7), TRUE(), FALSE())",
    "note": "WEEKDAY returns 1 for Sunday and 7 for Saturday in Airtable's default numbering."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Boolean & Checkbox Formulas"
      description="Logic that returns true or false, checkbox conditions, all-or-nothing flags."
      formulas={formulas}
    />
  );
}
