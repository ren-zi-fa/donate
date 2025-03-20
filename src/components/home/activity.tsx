import { HandPlatter, Hospital, School } from "lucide-react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export default function Activity() {
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
        <Card className="p-8 md:w-[400px] mx-auto ">
          <CardHeader>
            <div className="mx-auto">
              <School size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Child Education
            </h1>
          </CardHeader>
          <CardDescription className="text-center">
            Bersama, Kita Buka Pintu Pendidikan untuk Setiap Anak.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
        <Card className="p-8 md:w-[400px] mx-auto">
          <CardHeader>
            <div className="mx-auto">
              <Hospital size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Medical Treatment
            </h1>
          </CardHeader>
          <CardDescription className="text-center">
            Bersama, Kita Bisa Memberikan Akses Kesehatan yang Layak.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
        <Card className="p-8 md:w-[400px] mx-auto">
          <CardHeader>
            <div className="mx-auto">
              <HandPlatter size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Pure Drinking Water
            </h1>
          </CardHeader>
          <CardDescription className="text-center">
            Air Bersih untuk Hari Ini, Masa Depan yang Lebih Baik untuk Besok.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
      </div>
    </div>
  );
}
