import ContentCauses from "./content-causes";
import { useDocumentTitle } from "@/hooks/useTitle";
import { Breadcrumbs } from "../BreadCrumb";

export default function Causes() {
  useDocumentTitle("Causes - DoNate");
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-600">
        <div className="absolute top-32 left-0 w-full  mx-auto text-orange-500">
          <h1 className="text-center text-4xl text-white font-bold">Causes</h1>
          <div className="mx-auto w-fit mt-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pages", href: "#" },
                { label: "Causes" },
              ]}
            />
          </div>
        </div>
      </div>
      <ContentCauses />
    </>
  );
}
