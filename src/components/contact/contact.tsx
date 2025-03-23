import Menu from "../Menu";
import FormContact from "./form";
import { useDocumentTitle } from "@/hooks/useTitle";

export default function Contact() {
  useDocumentTitle("Contact - DoNate");
  return (
    <>
      <Menu
        title="Contact"
        items={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Contact" },
        ]}
      />
      <FormContact />
    </>
  );
}
