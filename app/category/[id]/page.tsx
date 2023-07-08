'use client'
 
import ProductList from '@/components/home/ProductList'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { IProduct } from '@/types'
import { Navbar } from '@/components/Navbar'
 
export default function Categories() {
    const [products, setProducts] = useState<IProduct[]>([])
    const pathname = usePathname()
   
    useEffect(() => {
        fetchProducts()
    }, [])
    
    const fetchProducts = async () => {
        const url = `${pathname}`
        const res = await axios.get(`https://dummyjson.com/products${url}`).then(response => response.data)
        setProducts(res.products)
    }
    
  return (
    <>
    <Navbar />
    <div className='flex'>
      <ScrollArea className='max-h-[100vh] w-full rounded-md border overflow-y-auto'>
      <main className="py-24 px-6">
        <ProductList products={products}/>
      </main>
      </ScrollArea>
    </div>
    </>
  )
}