import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ArrowRightCircle } from "lucide-react";
import { Nav_Link, route } from "./constant";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="absolute inset-x-0 z-50 px-0 md:x-4">
      <div className="flex justify-between items-center fixed md:static w-full  backdrop-blur-md md:backdrop-blur-none md:border-none border-b border-gray-300 ">
        {/* Logo dengan Background dan Border */}
        <div className=" px-4 py-2 rounded-md shadow-md md:border-b border-gray-300 border-none">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-orange-500">Chari</span>Team
          </h1>
        </div>

        {/* Navigation Links (Hidden in Mobile) */}
        <div className="md:flex space-x-4 text-xl text-black md:text-white items-center hidden">
          {Nav_Link.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.title}</Link>
            </div>
          ))}
          <Button variant="outline" size="lg" className="text-black">
            Donate Now
            <ArrowRightCircle className="w-10 h-10" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (OpenSheet) */}
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild className="">
            <Button variant="outline" className="fixed right-2 top-3">
              <AlignJustify color="black" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-white shadow-md border-b border-gray-300 [&>button]:hidden"
          >
            <SheetHeader className="bg-white/90 p-4 border-b border-gray-300 shadow-sm">
              <SheetTitle className="text-lg font-bold text-black">
                Menu
              </SheetTitle>
              <SheetDescription className="text-gray-600">
                Pilih opsi yang tersedia.
              </SheetDescription>
            </SheetHeader>
            <ul className="mt-4 space-y-2 text-black">
              {Nav_Link.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      ) : null}
    </nav>
  );
}

