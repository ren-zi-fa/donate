import ContentCauses from "./content-causes";
import { useDocumentTitle } from "@/hooks/useTitle";
import Menu from "../Menu";

export default function Causes() {
  useDocumentTitle("Causes - DoNate");
  return (
    <>
      <Menu
        title="Causes"
        items={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Causes" },
        ]}
      />
      <ContentCauses />
    </>
  );
}
