import { Navbar } from "@/components/Navbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios";

interface RootLayoutProps {
  children: React.ReactNode
}

async function getCategories() {
  const res = await axios.get(`https://dummyjson.com/products/categories`).then(res => res.data).catch(err => console.error(err))
  
  return res;
}

export default async function ProductLayout({ children }: RootLayoutProps) {
  const categories = await getCategories();
  return (
    <div className="relative flex flex-col">
      <Navbar categories={categories} />
      <div className='flex'>
          {children}
      </div>
    </div>
  )
}