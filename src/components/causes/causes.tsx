import { useDocumentTitle } from "@/hooks/useTitle";
import Menu from "../Menu";
import CausesCard from "../causes";

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
      <div className=" w-fit mx-auto bg-gray-300  p-8 h-fit">
        <h1 className="text-center p-1 text-orange-500 font-extralight border-2 bg-white rounded-2xl w-fit mx-auto">
          Feature Causes
        </h1>
        <h2 className="text-center font-bold text-2xl text-gray-600 md:text-4xl my-8">
          Setiap Anak Berhak <br /> Mendapatkan <br /> Kesempatan untuk Belajar
        </h2>
        <CausesCard />
      </div>
    </>
  );
}
