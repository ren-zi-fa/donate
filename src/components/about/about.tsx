import Content from "./content";
import Members from "../members";
import { useDocumentTitle } from "@/hooks/useTitle";
import Menu from "../Menu";

export default function About() {
  useDocumentTitle("About - DoNate");
  return (
    <>
      <Menu
        title="About"
        items={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "About" },
        ]}
      />
      <Content />
      <Members />
    </>
  );
}
