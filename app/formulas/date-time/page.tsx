import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Business Days Between Two Dates",
    "use": "Count working days between a start and end date, skipping weekends.",
    "formula": "WORKDAY_DIFF({Start Date}, {End Date})",
    "note": "WORKDAY_DIFF is native to Airtable and handles weekends automatically. Add a third argument for custom holidays."
  },
  {
    "name": "Days Until Due Date",
    "use": "Show how many days remain before a deadline. Negative means overdue.",
    "formula": "DATETIME_DIFF({Due Date}, TODAY(), 'days')",
    "note": "Change 'days' to 'hours', 'minutes', 'months', or 'years' depending on what you need."
  },
  {
    "name": "Quarter from a Date",
    "use": "Turn any date into Q1 2026, Q2 2026, etc.",
    "formula": "\"Q\"&CEILING(MONTH({Date})/3,1)&\" \"&YEAR({Date})",
    "note": "CEILING rounds up so months 1-3 become 1, months 4-6 become 2, and so on."
  },
  {
    "name": "Age from Birthdate",
    "use": "Calculate someone's current age in years.",
    "formula": "DATETIME_DIFF(TODAY(), {Birthdate}, 'years')",
    "note": "Returns a whole number. For months, change 'years' to 'months'."
  },
  {
    "name": "Next Monday from Today",
    "use": "Find the date of the coming Monday, useful for sprint planning.",
    "formula": "DATEADD(TODAY(), 8-WEEKDAY(TODAY()), 'days')",
    "note": "WEEKDAY returns 1 for Sunday through 7 for Saturday. This offsets to the next Monday."
  },
  {
    "name": "Format Date as YYYY-MM-DD",
    "use": "Convert a date field to a specific text format for exports or concatenation.",
    "formula": "DATETIME_FORMAT({Date}, 'YYYY-MM-DD')",
    "note": "Change the format string to match whatever you need. 'DD/MM/YYYY', 'MMMM D, YYYY', etc."
  },
  {
    "name": "Week Number from Date",
    "use": "Get the ISO week number for a given date.",
    "formula": "WEEKNUM({Date})",
    "note": "Returns a number 1-53. Useful for grouping records by week in reports."
  },
  {
    "name": "Is Date in the Past?",
    "use": "Flag records where a date has already passed.",
    "formula": "IF({Date} < TODAY(), TRUE(), FALSE())",
    "note": "Returns a boolean. Can be used directly in filters or as a conditional field."
  }
];

const videos = [
  {
    "title": "How to Create Any Type of Formulas in Airtable (2026 Full Guide)",
    "channel": "YouTube",
    "url": "https://www.youtube.com/watch?v=fOPDIe7Xf-I"
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Date & Time Formulas"
      description="Business days, date differences, quarters, age calculations, relative dates. These get asked more than any other category."
      formulas={formulas}
      videos={videos}
    />
  );
}
