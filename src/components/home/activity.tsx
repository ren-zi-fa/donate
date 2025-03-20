import { HandPlatter, Hospital, School } from "lucide-react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export default function Activity() {
  return (
    <div className="h-screen mt-10">
      <h1 className="text-center p-1 text-gray-100 font-extralight rounded-xl bg-orange-400  w-fit mx-auto">
        What We Do
      </h1>
      <h2 className="text-center text-3xl font-semibold my-8">
        Pelajari Lebih Lanjut <br /> Tentang Apa yang Kami <br />
        Lakukan dan Ikut Terlibat
      </h2>
      <div className="flex md:flex-wrap justify-center gap-8">
        <Card className="p-8">
          <CardHeader>
            <div className="mx-auto">
              <School size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Child Education
            </h1>
          </CardHeader>
          <CardDescription>
            Bersama, Kita Buka Pintu Pendidikan untuk Setiap Anak.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
        <Card className="p-8">
          <CardHeader>
            <div className="mx-auto">
              <Hospital size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Medical Treatment
            </h1>
          </CardHeader>
          <CardDescription>
            Bersama, Kita Bisa Memberikan Akses Kesehatan yang Layak.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
        <Card className="p-8">
          <CardHeader>
            <div className="mx-auto">
              <HandPlatter size={140} strokeWidth={2} color="orange" />
            </div>
            <h1 className="text-center text-2xl font-semibold">
              Pure Drinking Water
            </h1>
          </CardHeader>
          <CardDescription>
            Air Bersih untuk Hari Ini, Masa Depan yang Lebih Baik untuk Besok.
          </CardDescription>
          <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
        </Card>
      </div>
    </div>
  );
}
