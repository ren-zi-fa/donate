import Content from "./content";
import Members from "./members";
import { useDocumentTitle } from "@/hooks/useTitle";
import { Breadcrumbs } from "../BreadCrumb";

export default function About() {
  useDocumentTitle("About - DoNate");
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-600">
        <div className="absolute top-32 left-0 w-full  mx-auto text-orange-500">
          <h1 className="text-center text-4xl text-white font-bold">
            About Us
          </h1>
          <div className="mx-auto w-fit mt-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pages", href: "#" },
                { label: "About" },
              ]}
            />
          </div>
        </div>
      </div>
      <Content />
      <Members />
    </>
  );
}
