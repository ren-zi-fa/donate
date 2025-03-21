import { Breadcrumbs } from "../BreadCrumb";
import FormContact from "./form";
import { useDocumentTitle } from "@/hooks/useTitle";

export default function Contact() {
  useDocumentTitle("Contact - DoNate");
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-600">
        <div className="absolute top-32 left-0 w-full  mx-auto text-orange-500">
          <h1 className="text-center text-4xl text-white font-bold">
            Contact Us
          </h1>
          <div className="mx-auto w-fit mt-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pages", href: "#" },
                { label: "Contact" },
              ]}
            />
          </div>
        </div>
      </div>
      <FormContact />
    </>
  );
}
