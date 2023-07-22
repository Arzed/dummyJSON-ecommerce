import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IProduct } from "@/types";
import { format } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
// import { getAllProduct } from '../api'

interface Props {
  products: IProduct[]
}

const ProductList = ({products}: Props) => {
  return (
    <div className="container border border-slate-300 p-5 my-10 rounded-lg">
        <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div className="relative bg-white rounded-lg overflow-hidden shadow-slate-700 shadow-lg" key={product.id}>
                    <Image
                    key={product.id}
                    src={product.thumbnail}
                    alt={product.title}
                    width={900}
                    height={900}
                    className=" w-full h-full"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                    <div className="bg-black opacity-75 w-full h-full absolute z-10"></div>
                    <div className="flex flex-col gap-2 text-center z-20">
                        <div className="text-white font-bold uppercase text-xl hover:text-gray-200">
                            {product.title}
                        </div>
                        <p className="text-gray-300 mt-2">{format(product.price*product.discountPercentage/10)}</p>
                        <Link href={`/products/${product.id}`} className={cn(buttonVariants({size: 'lg'}),"flex bg-slate-100/80 text-slate-900 hover:bg-slate-100 hover:text-slate-900/")}>
                            Detail <ChevronRight />
                        </Link>
                    </div>
                    </div>
                </div>
                )
            )}
        </div>
    </div>
  );
};

export default ProductList;
