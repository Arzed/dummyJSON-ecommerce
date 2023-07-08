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
import { useContext } from "react"

export default function Cart() {
  const { savedProduct, removeProduct } = useContext(ProductContext);

  const handleRemoveProduct = (productName: string) => {
    removeProduct(productName)
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="rounded-full p-2">
            <Icons.cart />
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
          <div>
            {savedProduct.map((product) => (
              <div key={product.id} className="border border-gray-300 rounded-md p-4 flex flex-col items-center">
              <img src={product.thumbnail} alt={product.title} className="h-40 w-40 mb-4" />
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <div className="flex items-center mb-2">
                <span className="mr-2 font-bold">Height:</span>
                <span>{product.price} cm</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2 font-bold">Weight:</span>
                <span>{product.rating} kg</span>
              </div>
              <button onClick={() => handleRemoveProduct(product.title)} className="">
                Remove
              </button>
            </div>
            ))}
          </div>
        )}
        {/* <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            Lorem ipsum
          </div>
          <div className="grid items-center gap-4">
            Dolor sit amet
          </div>
        </div> */}
        <SheetFooter>
          <SheetClose asChild>
            {savedProduct.length === 0 ? <Button disabled={true} type="submit">Checkout</Button> : <Button type="submit">Checkout</Button>}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
