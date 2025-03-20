import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
export default function Content() {
  return (
    <div className="mt-20 flex flex-col md:flex-row gap-4 p-4 md:p-0 h-fit">
      <div className="relative ms-6">
        <img src={aboutImage1} alt="donate" className="w-[800px]" />
        <img
          src={aboutImage2}
          alt="donate"
          className="absolute -top-10 right-0 h-32 md:h-auto shadow-lg  border-4 border-white"
        />
      </div>
      <div className="">
        <h1 className="text-sm font-semibold tracking-wide bg-orange-200 w-fit rounded-4xl p-2 text-orange-500 ">
          About Us
        </h1>
        <h3 className="text-2xl md:text-5xl font-semibold tracking-tight">
          We Help People In Need Around <br />
          The World
        </h3>
        <Card className="px-4 border-b-4 border-orange-600 mt-4">
          <CardDescription>
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed
            <br />
            stet lorem sit clita duo justo erat amet
          </CardDescription>
          <CardTitle className="underline text-orange-500">
            Jhon Doe, Founder
          </CardTitle>
        </Card>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. <br /> Clita erat ipsum et lorem et sit, sed stet
          lorem sit <br /> clita duo justo magna dolore erat amet
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button> Learn More</Button>
          <Button variant="outline"> Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
