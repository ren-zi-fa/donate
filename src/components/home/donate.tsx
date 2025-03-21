import { HandHeart } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { useState } from "react";

export default function DonateForm() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-gray-500 h-fit">
      <div className="w-full  ">
        <h1 className="bg-orange-500 text-white p-3 rounded-3xl text-xs w-fit">
          Donate Now
        </h1>
        <h2 className="text-4xl font-bold text-white ">
          Terimakasih Atas Donasi Yang Telah Anda Berikan.
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          eligendi impedit maxime cum nam nostrum dolorem quas, quidem eos
          necessitatibus non nesciunt facere alias unde ullam inventore, ducimus
          sed odio exercitationem molestias.
        </p>
      </div>

      <div className="w-full">
        <Card>
          <div className="p-4 flex flex-col  space-y-4">
            <Input type="text" placeholder="input name" />
            <Input type="email" placeholder="input email" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Rp.10.000", "Rp.50.000", "Rp.100.000"].map((amount, index) => (
              <Button
                key={index}
                variant="outline"
                onMouseEnter={() => setActiveIndex(index)} 
                className={`transition-colors hover:bg-orange-500  ${
                  activeIndex === index
                    ? "bg-orange-500 text-white "
                    : "bg-white text-black "
                }`}
              >
                {amount}
              </Button>
            ))}
          </div>
          <div className="mx-auto">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Donate Now <HandHeart size={50} strokeWidth={2} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
