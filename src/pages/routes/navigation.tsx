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
import { AlignJustify } from "lucide-react";

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
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Navbar</h1>

      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="">
              <AlignJustify color="black"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className=" [&>button]:hidden " >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Pilih opsi yang tersedia.</SheetDescription>
            </SheetHeader>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-200">
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
