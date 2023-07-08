export interface CartContextState  {
    savedProduct: IProduct[];
    addProduct: ( pokemon: IProduct, qty: number ) => void;
    removeProduct: (pokemonName: string) => void
}

export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

export interface ICategory {
	id: number
	name: string
	imageSrc: string
}