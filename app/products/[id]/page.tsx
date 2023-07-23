'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { IProduct } from '@/types'
import { format } from '@/lib/currency'
import { Button } from '@/components/ui/button'
import QuantityPicker from '@/components/QuantityPicker'
import { Icons } from '@/components/home/Icons'
import { ProductContext } from '@/context/CartContext'
import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'

export default function Product() {
    const [product, setProduct] = useState<IProduct[] | any>([])
    const pathname = usePathname()
    const [numberOfitems, updateNumberOfItems] = useState(1)
    const { addProduct } = useContext(ProductContext);
    const { toast } = useToast();
   
    useEffect(() => {
        fetchProducts()
    }, [])
    
    const fetchProducts = async () => {
        const url = `${pathname}`
        const res = await axios.get(`https://dummyjson.com${url}`).then(response => response.data)
        setProduct(res)
    }

    function increment() {
        updateNumberOfItems(numberOfitems + 1)
      }
  
      function decrement() {
        if (numberOfitems === 1) return
        updateNumberOfItems(numberOfitems - 1)
      }

    const addItemToCart = (product: IProduct, qty: number) => {
        addProduct(product, qty)
        toast({
            title: 'Sukses',
            description: "Berhasil di tambahkan ke dalam keranjang"
        })
    }
    
  return (
    <ScrollArea className='max-h-[100vh] w-full rounded-md border overflow-y-auto'>
        <main className="py-24 px-6">
            <div className="lg:h-screen md:grid grid-cols-2 place-content-center md:py-16 md:px-12 md:gap-16 lg:px-36 xl:px-72 xl:gap-20">
                {/* ======== Image Section ============ */}
                <div className="max-h-[50vh] w-full relative md:max-h-full md:gap-8 md:grid md:place-content-center overflow-hidden">
                    <div className="">
                        <Image src={product.thumbnail}
                        alt="Inventory item" 
                        width={1200}
                        height={1200}
                        className="max-h-full object-cover w-full md:rounded-2xl md:cursor-pointer shadow-md" />
                    </div>
                </div>

                {/* ======== Detail Section ========== */}
                <div className="p-5 space-y-6 font-bold pb-10 md:grid md:place-content-center md:p-0">
                <article className="space-y-4 md:space-y-6">
                        <h1 className="text-3xl font-bold capitalize text-primary md:text-4xl xl:text-5xl">
                            {product.title}
                        </h1>
                        <p className="text-foreground font-normal">{product.description}</p>
                    </article>

                <div className='flex justify-between md:block'>
                    <div className="space-x-4 flex items-center">
                        <span className="text-2xl">{format(product.price)}</span>
                        <span className="py-1 px-2 bg-element-pale rounded-md text-green-700">Sale {product.discountPercentage}%</span>
                    </div>
                    <p className="text-off line-through">{format(product.price*product.discountPercentage/10)}</p>
                </div>

                <div className="space-y-3 md:flex md:space-y-0 md:space-x-3">
                    <div className="flex justify-between items-center bg-regular rounded-md md:flex-[35%] gap-4">
                        <div className="px-2 text-xs">PCS</div>
                        <QuantityPicker
                          increment={increment}
                          decrement={decrement}
                          numberOfitems={numberOfitems}
                        />
                        <button
                            // full
                            title='Add to Cart'
                            className='w-full flex justify-center items-center space-x-3 p-3 text-slate-200 bg-green-700 rounded-md shadow-2xl shadow-green-700 md:flex-[65%] active:scale-95 hover:opacity-70 duration-200'
                        >
                            Beli Sekarang
                        </button>
                    </div>
                </div>
                <Button className='py-5' variant={'outline'} onClick={() => addItemToCart(product, numberOfitems)}>
                    <Icons.cart className='h-5 w-5' />
                </Button>
                </div>
            </div>
        </main>
    </ScrollArea>
  )
}