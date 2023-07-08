import { ScrollArea } from "@/components/ui/scroll-area"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function SignInLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <div className='flex'>
        <ScrollArea className='max-h-[100vh] w-full px-5 rounded-md border overflow-y-auto'>
          {children}
        </ScrollArea>
      </div>
    </div>
  )
}