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
import { ProductContext } from "@/context/CartContext"
import { useContext, useState } from "react"
import Image from "next/image"
import QuantityPicker from "./QuantityPicker"
import { ScrollArea } from "./ui/scroll-area"

export default function Cart() {
  const { savedProduct, removeProduct } = useContext(ProductContext);
  // const qty = savedProduct.map(product => product.qty)
  // const [numberOfitems, updateNumberOfItems] = useState(qty)

  // function increment(numberOfitems: number) {
  //   numberOfitems + 1
  // }

  // function decrement(numberOfitems: number) {
  //   if (numberOfitems === 1) return
  //   numberOfitems - 1
  // }

  const handleRemoveProduct = (productName: string) => {
    removeProduct(productName)
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="relative rounded-full p-2">
            <Icons.cart />
            {savedProduct.length > 0 && (
              <span className="absolute py-1 px-2 bottom-0 right-0 rounded-full text-xs text-white bg-red-500">{savedProduct.length}</span>
            )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Keranjang</SheetTitle>
          <SheetDescription className="flex gap-2">
            <span className="text-md">
                Yuk check out barang belanjaan anda
            </span>
            <Icons.smile className="h-4 w-4 mt-0.5" />
          </SheetDescription>
        </SheetHeader>
        {savedProduct.length === 0 ? (
          <div className="container flex h-[80vh] flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                Keranjang belanjaan anda kosong
            </div>
          </div>
        ) : (
          <div className="flex h-[80vh] flex-col">
            <ScrollArea className="max-h-[80vh] w-full rounded-md border overflow-y-auto">
              {savedProduct.map((product) => (
                <div key={product.id} className="rounded-md p-4 flex flex-col items-center">
                  <div className="flex">
                    <Image src={product.thumbnail} alt={product.title} width={900} height={900} className="mb-4 rounded-md" />
                  </div>
                  <div className="flex">
                    <h2 className="text-lg font-bold my-1">{product.title}</h2>
                    <span className="text-lg font-bold mx-2 my-1">x{product.qty}</span>
                    {/* <QuantityPicker increment={undefined} decrement={undefined} numberOfitems={0} /> */}
                    <Button variant={'destructive'} size={'icon'} onClick={() => handleRemoveProduct(product.title)} className="flex">
                      <Icons.delete/>
                    </Button>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}
        <SheetFooter>
          <SheetClose asChild>
            {savedProduct.length === 0 ? <Button disabled={true} type="submit">Checkout</Button> : <Button type="submit">Checkout</Button>}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
