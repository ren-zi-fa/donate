import { Breadcrumbs } from "./BreadCrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface IMenuProps {
  title: string;
  items: BreadcrumbItem[];
}

export default function Menu({ items, title }: IMenuProps) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-600">
      <div className="absolute top-32 left-0 w-full  mx-auto text-orange-500">
        <h1 className="text-center text-4xl text-white font-bold">{title}</h1>
        <div className="mx-auto w-fit mt-4">
          <Breadcrumbs items={items} />
        </div>
      </div>
    </div>
  );
}
