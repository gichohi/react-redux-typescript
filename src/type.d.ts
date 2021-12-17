interface IProduct {
    id: number
    title: string
    category: string
    description: string
    image: string
    price: number
}

type ProductState = {
    products: IProduct[]
}

type ProductDetailState = {
    product: IProduct
}

type ProductAction = {
    type: string
    product: IProduct
}

type SetProductAction = {
    type: string
    products: IProduct[]
}

type DispatchType = (args: ProductAction) => ProductAction