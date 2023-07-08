import ProductList from "@/components/home/ProductList";
import { ScrollArea } from "@/components/ui/scroll-area";

async function getData() {
    const res = await fetch('https://dummyjson.com/products?limit=100',{ cache: 'no-store'})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json();
}

export default async function Home() {
    const data = await getData()
  return (
    <ScrollArea className='max-h-[100vh] w-full rounded-md border overflow-y-auto'>
      <main className="py-24 px-6">
        <h1 className="text-2xl text-center">Featured Products</h1>
        <ProductList products={data.products}/>
      </main>
    </ScrollArea>
  )
}
