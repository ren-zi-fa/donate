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
    <nav className="p-4 absolute inset-x-0  z-50">
      <div className="flex justify-between items-center ">
        <div className=" ">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-orange-500">Chari</span>Team
          </h1>
        </div>
        <div className="md:flex space-x-4 text-xl text-white items-center hidden">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Causes</a>
          <a href="">Pages</a>
          <a href="">Contact</a>
        <Button variant="outline" size="lg" className="text-black">
          Donate Now
          <ArrowRightCircle className="w-10 h-10" />
        </Button>
        </div>
      </div>

      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="fixed right-2 top-6">
              <AlignJustify color="black" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className=" [&>button]:hidden ">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Pilih opsi yang tersedia.</SheetDescription>
            </SheetHeader>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 text-orange-400 rounded hover:bg-gray-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ) : null}
    </nav>
  );
}
