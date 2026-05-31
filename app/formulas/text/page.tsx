import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Full Name from First and Last",
    "use": "Combine separate name fields into one display name.",
    "formula": "TRIM({First Name} & \" \" & {Last Name})",
    "note": "TRIM removes any extra spaces if one of the fields is empty."
  },
  {
    "name": "Extract Domain from Email",
    "use": "Pull the domain out of an email address for company matching.",
    "formula": "MID({Email}, FIND(\"@\", {Email}) + 1, LEN({Email}))",
    "note": "Returns everything after the @ symbol. 'jane@example.com' becomes 'example.com'."
  },
  {
    "name": "Capitalize First Letter",
    "use": "Fix lowercase names or titles that were entered inconsistently.",
    "formula": "UPPER(LEFT({Name}, 1)) & LOWER(MID({Name}, 2, LEN({Name})))",
    "note": "Only capitalizes the first character. For title case across all words, you need a more complex formula or a script."
  },
  {
    "name": "Truncate Long Text with Ellipsis",
    "use": "Show a short preview of a long description field.",
    "formula": "IF(LEN({Description}) > 100, LEFT({Description}, 100) & \"...\", {Description})",
    "note": "Change 100 to however many characters you want before the cutoff."
  },
  {
    "name": "Remove Spaces from Text",
    "use": "Clean up text that has extra internal or surrounding spaces.",
    "formula": "TRIM(SUBSTITUTE({Field}, \"  \", \" \"))",
    "note": "TRIM handles leading and trailing spaces. SUBSTITUTE catches double spaces in the middle."
  },
  {
    "name": "Count Words in a Field",
    "use": "Count how many words are in a text field.",
    "formula": "LEN(TRIM({Text})) - LEN(SUBSTITUTE(TRIM({Text}), \" \", \"\")) + 1",
    "note": "Works by counting spaces plus one. Returns 0 for empty fields, so wrap in IF({Text} = \"\", 0, ...) if needed."
  },
  {
    "name": "Check if Text Contains a Word",
    "use": "Return true if a text field contains a specific word or phrase.",
    "formula": "IF(FIND(\"urgent\", LOWER({Notes})), TRUE(), FALSE())",
    "note": "LOWER makes it case-insensitive. FIND returns 0 if not found, which IF treats as false."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="Text & String Formulas"
      description="Name formatting, email parsing, text cleanup, concatenation. The formulas for making your text fields useful."
      formulas={formulas}
    />
  );
}
