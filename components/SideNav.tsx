"use client"

import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/home/Icons"
import { ScrollArea } from "./ui/scroll-area"
import { Button, buttonVariants } from "./ui/button"

interface SideNavProp {
  categories: string[]
}

export function SideNav({categories}: SideNavProp) {
	const [isShowCategories, setIsShowCategories] = useState(false)
	const [isShowSupport, setIsShowSupport] = useState(false)

	const showCategories = () => {
		setIsShowCategories(!isShowCategories)
	}

	const showSupport = () => {
		setIsShowSupport(!isShowSupport)
	}

  return (
	<div className="flex h-[80vh] py-5 flex-col">
		<div className="flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
			<Link href='/products' className={cn(buttonVariants({variant: 'ghost'}), 'px-5 py-2 justify-start')}>
				<Icons.box className="h-5 w-5 mr-2"/>
				<span>Products</span>
			</Link>
			<Button onClick={showCategories} variant={'ghost'} className='px-5 py-2 justify-start'>
				<Icons.list className="h-5 w-5 mr-2"/>
				<span>
					Kategori
				</span>
				<span className={isShowCategories ? "shrink-0 transition duration-300 -rotate-180 absolute right-10" : 'transition duration-300 absolute right-10'}>
					<Icons.chevronDown />
				</span>
			</Button>
			{isShowCategories && (
				<div className="flex">
				 <ScrollArea className="max-h-[50vh] w-full rounded-md border overflow-y-auto">
					 <ul className="grid w-[200px] gap-3 p-4">
						 {categories.map((category) => (
							 <Link
								 href={`/category/${category}`}
								 key={category}
								 className={cn(buttonVariants({variant: 'ghost'}), 'px-0 py-2 justify-start capitalize')}
							 >
								 {category}
							 </Link>
						 ))}
					 </ul>
				 	</ScrollArea>
			 	</div>
			)}
			<Button onClick={showSupport} variant={'ghost'} className='px-5 py-2 justify-start'>
				<Icons.user className="h-5 w-5 mr-2"/>
				<span>
					Bantuan
				</span>
				<span className={isShowSupport ? "shrink-0 transition duration-300 -rotate-180 absolute right-10" : 'transition duration-300 absolute right-10'}>
					<Icons.chevronDown />
				</span>
			</Button>
			{isShowSupport && (
				<div className="flex">
				 <ScrollArea className="max-h-[50vh] w-full rounded-md border overflow-y-auto">
					 <ul className="grid w-[200px] gap-3 p-4">
							 <Link
								 href={`#`}
								 className={cn(buttonVariants({variant: 'ghost'}), 'px-0 py-2 justify-start capitalize')}
							 >
								 Komunitas
							 </Link>
							 <Link
								 href={`#`}
								 className={cn(buttonVariants({variant: 'ghost'}), 'px-0 py-2 justify-start capitalize')}
							 >
								 Hubungi kami
							 </Link>
							 <Link
								 href={`#`}
								 className={cn(buttonVariants({variant: 'ghost'}), 'px-0 py-2 justify-start capitalize')}
							 >
								 Ekslor bantuan
							 </Link>
					 </ul>
				 	</ScrollArea>
			 	</div>
			)}
		</div>
	</div>
  )
}