import FormulaPageTemplate from "@/components/FormulaPageTemplate";

const formulas = [
  {
    "name": "Link Directly to This Record",
    "use": "Generate a URL that opens this specific record in Airtable.",
    "formula": "\"https://airtable.com/\" & BASE_ID() & \"/\" & TABLE_ID() & \"/\" & RECORD_ID()",
    "note": "BASE_ID(), TABLE_ID(), and RECORD_ID() are built-in Airtable functions. The link opens the record in the web app."
  },
  {
    "name": "Pre-filled Form URL",
    "use": "Create a button that opens a form with fields pre-filled from this record.",
    "formula": "\"https://airtable.com/FORM_ID?prefill_Name=\" & ENCODE_URL_COMPONENT({Name})",
    "note": "Replace FORM_ID with your actual form ID. ENCODE_URL_COMPONENT handles spaces and special characters."
  },
  {
    "name": "Extract Domain from URL",
    "use": "Pull just the domain from a full URL field.",
    "formula": "REGEX_EXTRACT({URL}, \"https?://([^/]+)\")",
    "note": "Returns 'example.com' from 'https://example.com/page/path'. REGEX_EXTRACT is available on paid plans."
  },
  {
    "name": "Google Maps Link from Address",
    "use": "Build a clickable Google Maps link from an address field.",
    "formula": "\"https://www.google.com/maps/search/?api=1&query=\" & ENCODE_URL_COMPONENT({Address})",
    "note": "Works with any text address. Open as a URL field type to make it clickable."
  }
];

export default function Page() {
  return (
    <FormulaPageTemplate
      title="URL & Link Formulas"
      description="Build Airtable record links, create button URLs, extract parts from URLs."
      formulas={formulas}
    />
  );
}
