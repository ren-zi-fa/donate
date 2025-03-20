import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Content from "./content";
import Members from "./members";

export default function About() {
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden bg-gray-600">
        <div className="absolute top-32 left-0 w-full  mx-auto text-orange-500">
          <h1 className="text-center text-4xl text-white font-bold">
            About Us
          </h1>
          <div className="mx-auto w-fit mt-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/about" className="text-white">
                    Pages
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-orange-500">
                    About Us
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <Content />
      <Members/>
    </>
  );
}
