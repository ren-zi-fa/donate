import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ArrowRightCircle } from "lucide-react";
import { Nav_Link } from "./constant";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="absolute inset-x-0 z-50 px-0 md:px-4 md:x-4  ">
      <div className="flex justify-between items-center fixed md:static w-full backdrop-blur-md md:backdrop-blur-none md:border-none border-b border-gray-300 ">
        <div className=" px-4 py-2">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-orange-500">Do</span>Nate
          </h1>
        </div>
        <div className="md:flex space-x-4 text-xl text-black md:text-white items-center hidden">
          {Nav_Link.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn("text-white", isActive && "text-orange-500")
                }
              >
                {item.title}
              </NavLink>
            </div>
          ))}
          <Button variant="outline" size="lg" className="text-black">
            Donate Now
            <ArrowRightCircle className="w-10 h-10" />
          </Button>
        </div>
      </div>

      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="">
            <Button variant="outline" className="fixed right-2 top-3">
              <AlignJustify color="black" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-gray-950 shadow-md border-b border-gray-300 [&>button]:hidden"
          >
            <SheetTitle />
            <SheetDescription />
            <ul className="mt-4 ms-4 mb-5 font-semibold space-y-2 text-xl text-white">
              {Nav_Link.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn("text-white", isActive && "text-orange-500")
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      ) : null}
    </nav>
  );
}
