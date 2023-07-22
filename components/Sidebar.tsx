'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "./home/Icons"
import { cn } from "@/lib/utils"
import { SideNav } from "./SideNav"

interface SidebarProp {
    categories: string[]
}

export default function Sidebar({categories}: SidebarProp) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="rounded-full p-2">
            <Icons.menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          {/* <SheetDescription className="flex gap-2">
            <span className="text-md">
                test
            </span>
          </SheetDescription> */}
        </SheetHeader>
        <SideNav categories={categories}/>
        {/* <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            Lorem ipsum
          </div>
          <div className="grid items-center gap-4">
            Dolor sit amet
          </div>
        </div> */}
        {/* <SheetFooter>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
