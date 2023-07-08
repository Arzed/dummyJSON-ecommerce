import { Navbar } from "@/components/Navbar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProductLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className='flex'>
          {children}
      </div>
    </div>
  )
}