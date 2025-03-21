import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function FormContact() {
  return (
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:p-0 h-full">
      <div className="">
        <div className=" ms-4 my-4 ">
          <h1 className="text-sm font-semibold tracking-wide bg-orange-200 w-fit rounded-4xl p-2 text-orange-500 ">
            Contact Us
          </h1>
          <p className="text-4xl font-bold my-4">
            If You Have Any Query,
            <br /> Please Contact Us
          </p>
        </div>
        <Card className="p-4 mx-4">
          <div className="flex gap-4 ">
            <Input type="text" placeholder="Your Name" />
            <Input type="text" placeholder="Your Email" />
          </div>
          <Input type="text" placeholder="Subject" />
          <Textarea placeholder="Message"></Textarea>
          <Button className="bg-orange-500 hover:bg-orange-400 w-1/2 mx-auto">
            Send Messages
          </Button>
        </Card>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2745228899075!2d100.45499727423093!3d-0.9459857353473404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b70594a4437b%3A0xb6431a452b32e3f7!2sRsj%20Gadut!5e0!3m2!1sid!2sid!4v1742491955582!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-none w-[360px] h-[500px] mx-auto sm:w-[600px]"
        ></iframe>
      </div>
    </div>
  );
}
