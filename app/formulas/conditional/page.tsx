import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Overdue Status with Days Remaining",
    "use": "Show 'Overdue' for past-due items, or how many days remain for upcoming ones.",
    "formula": "IF({Due Date} < TODAY(), \"Overdue\", DATETIME_DIFF({Due Date}, TODAY(), 'days') & \" days left\")",
    "note": "Combine with conditional coloring in your view to make overdue records stand out visually."
  },
  {
    "name": "Assign Tier by Revenue",
    "use": "Label accounts as Bronze, Silver, Gold, or Platinum based on a revenue field.",
    "formula": "IF({Revenue} >= 100000, \"Platinum\", IF({Revenue} >= 50000, \"Gold\", IF({Revenue} >= 10000, \"Silver\", \"Bronze\")))",
    "note": "Nested IFs evaluate top to bottom, so put your highest threshold first."
  },
  {
    "name": "SWITCH for Status Labels",
    "use": "Cleaner than nested IFs when you have many fixed values to map.",
    "formula": "SWITCH({Status}, \"New\", \"Just created\", \"In Progress\", \"Being worked on\", \"Done\", \"Completed\", \"Unknown status\")",
    "note": "The last argument is the fallback. SWITCH is easier to read than five nested IFs."
  },
  {
    "name": "Flag if Any Field is Empty",
    "use": "Catch incomplete records that are missing required fields.",
    "formula": "IF(OR({Name} = \"\", {Email} = \"\", {Phone} = \"\"), \"Incomplete\", \"Complete\")",
    "note": "Add as many fields as you need inside OR(). Works well as a filter to find records that need attention."
  },
  {
    "name": "Priority Score from Multiple Fields",
    "use": "Calculate a numeric priority from several yes/no or scored fields.",
    "formula": "IF({High Value Customer}, 3, 0) + IF({Overdue}, 2, 0) + IF({Has Open Issues}, 1, 0)",
    "note": "Higher number means higher priority. Sort by this field to triage your queue."
  },
  {
    "name": "Pass/Fail from Score",
    "use": "Show Pass or Fail based on whether a numeric score meets a threshold.",
    "formula": "IF({Score} >= 70, \"Pass\", \"Fail\")",
    "note": "Change 70 to whatever your threshold is. Add more conditions for grades (A, B, C, etc.)."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Conditional Logic Formulas"
      description="IF statements, SWITCH, nested conditions, status labels, tier assignments. The formulas that make your base react to your data."
      formulas={formulas}
    />
  );
}
