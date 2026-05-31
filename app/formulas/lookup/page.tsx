import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Count Linked Records",
    "use": "Show how many records are linked to a parent record.",
    "formula": "COUNT(VALUES({Linked Field}))",
    "note": "Use this on the parent table. Replace {Linked Field} with the name of your rollup field that references the linked table."
  },
  {
    "name": "Sum Amounts from Linked Records",
    "use": "Total up a numeric field across all linked records.",
    "formula": "SUM(VALUES({Amount}))",
    "note": "This goes in a Rollup field, not a Formula field. Set the linked field, then choose the field to aggregate."
  },
  {
    "name": "Latest Date from Linked Records",
    "use": "Find the most recent date across all linked records.",
    "formula": "MAX(VALUES({Date Field}))",
    "note": "Also used in a Rollup. MAX works on date fields in Airtable."
  },
  {
    "name": "Count Linked Records Where Status is Done",
    "use": "Count only the linked records that meet a condition.",
    "formula": "COUNTIF(VALUES({Status}), \"Done\")",
    "note": "COUNTIF in a Rollup lets you filter before counting. Works with any text value."
  },
  {
    "name": "Percentage Complete from Linked Tasks",
    "use": "Calculate what fraction of linked tasks are marked complete.",
    "formula": "IF(COUNT(VALUES({Done})) = 0, 0, ROUND(COUNTIF(VALUES({Done}), TRUE()) / COUNT(VALUES({Done})) * 100, 0))",
    "note": "Uses a checkbox field called Done in the linked table. Returns a whole number percentage."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Lookup & Rollup Formulas"
      description="Pulling values across linked records, counting and summing. These only work alongside linked record fields."
      formulas={formulas}
    />
  );
}
