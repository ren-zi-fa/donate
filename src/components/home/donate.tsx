import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DonateForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-gray-500 h-fit">
      <div className="w-full  ">
        <h1 className="bg-orange-500 text-white p-3 rounded-3xl w-fit">
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
            <Button variant="outline">Rp.10.000</Button>
            <Button variant="outline">Rp.50.000</Button>
            <Button variant="outline">Rp.100.000</Button>
          </div>
          <div className="mx-auto">
            <Button> Donate Now</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
