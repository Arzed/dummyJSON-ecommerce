import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Icons } from './home/Icons'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AccountToggle = () => {
  const { data: session, status } = useSession();
  const img = session?.user?.image as string;
  const [isLoading, setIsLoading] = useState(false)
  const url = usePathname()

  if (status === 'loading') {
    return (
      <Skeleton className='h-9 w-15 rounded-md' />
    )
  }

  if (!session) {
    return (
      <>
        <Link
         href={`/auth/signin?callback=${url}`}
         >
          <Button
            onClick={() => {
              setIsLoading(true)
            }}
            variant={'ghost'}
            size={"sm"}
            className='hidden md:flex'
            >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
            Masuk
          </Button>
        </Link>
        <Button
          variant={'outline'}
          className='hidden md:flex'
        >
          <span>Daftar</span>
        </Button>
      </>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img src={img} alt="" referrerPolicy='no-referrer' className="h-9 w-9 rounded-full before:hover:bg-slate-100/10 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <DropdownMenuItem>
              <Icons.user className="mr-2 h-4 w-4" />
              <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
              <Icons.door className="mr-2 h-4 w-4" />
              <span>Log out</span>
          </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountToggle