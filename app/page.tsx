import ProductList from "@/components/home/ProductList";
import Banner from "@/components/home/Banner";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import axios from 'axios';
import { Navbar } from "@/components/Navbar";

// interface HomeProp {
//   data: any
// }

async function getProducts() {
  const res = await axios.get(`https://dummyjson.com/products?limit=9`).then(res => res.data).catch(err => console.error(err))
  
  return res.products;
}

async function getCategories() {
  const res = await axios.get(`https://dummyjson.com/products/categories`).then(res => res.data).catch(err => console.error(err))
  
  return res;
}

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <>
    <Navbar categories={categories} />
    <div className="flex">
      <ScrollArea className='max-h-[100vh] w-full rounded-md border overflow-y-auto'>
        <main className="py-24 px-6">
          <Banner />
          <h1 className="text-2xl text-center">Featured Products</h1>
          <ProductList products={products} />
          <div className="flex place-content-center my-10">
              <Link href={'/products'} className={buttonVariants({size: 'lg'})}>Lihat selengkapnya</Link>
          </div>
        </main>
      </ScrollArea>
    </div>
    </>
  )
}