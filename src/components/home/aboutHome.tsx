import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";

export default function AboutHome() {
  return (
    <div className="mt-20 flex flex-col md:flex-row  ">
      <div className="relative ms-6">
        <img src={aboutImage1} alt="donate" className="w-[700px]"/>
        <img
          src={aboutImage2}
          alt="donate"
          className="absolute -top-10 right-0 h-32 md:h-auto shadow-lg  border-4 border-white"
        />
      </div>
      <div className="">
        about us
      </div>
    </div>
  );
}
