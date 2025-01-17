import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoryFilter from "./CategoryFilter";
import PricingFilter from "./PricingFilter";
import MaterialFilter from "./MaterialFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import { Circle } from "lucide-react";
import StatusFilter from "./StatusFilter";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";

function SidebarFilter() {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center gap-2 jost">
        <div className="flex items-center gap-1 ">
          <IoReorderThreeOutline size={28} />
          Filter
        </div>
        <div className=" hidden sm:block text-gray-600 text-sm sm:text-base">
          <p>1–12 Products of 34 Products</p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[320px] p-0  max-h-screen overflow-y-scroll scrollbar-none pb-10"
      >
        <SheetHeader className="">
          <SheetTitle className="bg-[#a0a5a9] text-white p-4 sticky top-0 ">
            <div className="flex items-center gap-3  ">
              <h1 className=" text-lg sm:text-2xl font-bold text-left px-3">
                Filters
              </h1>
              <BsFilterLeft />
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="px-6 z-0 ">
          <CategoryFilter />
          <PricingFilter />
          <MaterialFilter />
          <ColorFilter />
          <SizeFilter />
          <StatusFilter />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarFilter;
