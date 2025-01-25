"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { BarChart, DoorClosed, House, Icon, RectangleEllipsis } from "lucide-react"
  import Link from "next/link";
import SingleItem from "../SingleItem/SingleItem";
import { dataSidebarElements, dataSidebarConfiguration } from "./SidebarRoutes.data";
function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" label="Homepage" icon={House} />
      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion type="single" collapsible key={title} className="w-full px-2">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
  
}

export default SidebarRoutes