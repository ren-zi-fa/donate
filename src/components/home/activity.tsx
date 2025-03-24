import { HandPlatter, Hospital, School } from "lucide-react";
import ActivityCard from "../ActivityCard";

export default function Activity() {
  const causes = [
    {
      Icon: School,
      title: "Child Education",
      description: "Bersama, Kita Buka Pintu Pendidikan untuk Setiap Anak.",
    },
    {
      Icon: Hospital,
      title: "Medical Treatment",
      description: "Bersama, Kita Bisa Memberikan Akses Kesehatan yang Layak.",
    },
    {
      Icon: HandPlatter,
      title: "Pure Drinking Water",
      description:
        "Air Bersih untuk Hari Ini, Masa Depan yang Lebih Baik untuk Besok.",
    },
  ];
  return (
    <div className="h-fit my-10">
      <h1 className="text-center py-1 px-3 text-gray-100 font-extralight rounded-xl bg-orange-400  w-fit mx-auto">
        What We Do
      </h1>
      <h2 className="text-center text-xl md:text-3xl font-semibold my-8">
        Pelajari Lebih Lanjut <br /> Tentang Apa yang Kami <br />
        Lakukan dan Ikut Terlibat
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {causes.map((cause, index) => (
          <ActivityCard key={index} {...cause} />
        ))}
      </div>
    </div>
  );
}
