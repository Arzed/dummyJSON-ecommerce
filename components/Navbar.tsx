"use client"

import React from "react"
import Link from "next/link"
import axios from 'axios'
import { cn } from "@/lib/utils"
import { Icons } from "@/components/home/Icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import AccountToggle from "./AccountToggle"
import Cart from "@/components/Cart"
import { useEffect, useState } from "react"
import { ICategory } from "@/types"
import { ScrollArea } from "./ui/scroll-area"

export function Navbar() {
  const [categories, setCategories] = useState<[]>([])
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const result = await axios.get('https://dummyjson.com/products/categories').then(res => res.data)
    setCategories(result)
  }

  return (
    <div className="fixed backdrop-blur-sm bg-slate-100/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="flex gap-10 container">
        <Link href={'/'} className="flex p-2">
          <Icons.logo className="h-7 w-7 mr-2" />
          <span className="text-lg font-bold">LOGO</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex">
                  <ScrollArea className="max-h-[50vh] w-full rounded-md border overflow-y-auto">
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
                      {categories.map((category) => (
                        <ListItem
                          href={`/category/${category}`}
                          title={category}
                          key={category}
                        >
                          Lorem ipsum dolor sit amet
                        </ListItem>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Bantuan</NavigationMenuTrigger>
              <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px] ">
                      <ListItem
                        title='Komunitas'
                      >
                        Lorem ipsum dolor sit amet
                      </ListItem>
                      <ListItem
                        title='Hubungi kami'
                      >
                        Lorem ipsum dolor sit amet
                      </ListItem>
                      <ListItem
                        title='Ekslor bantuan'
                      >
                        Lorem ipsum dolor sit amet
                      </ListItem>
                  </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex container items-center justify-end space-x-4">
            <Cart />
            <AccountToggle />
        </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 capitalize leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
