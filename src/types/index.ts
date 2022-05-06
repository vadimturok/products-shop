export interface IProduct {
   id: number
   title: string
   price: number
   description: string
   category: string
   image: string
   rating: {
      rate: number
      count: number
   }
}

export interface CartItem {
   product: IProduct
   quantity: number
}

export enum ProductsFilter {
   FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY',
   FILTER_BY_PRICE = 'FILTER_BY_PRICE',
   FILTER_BY_SEARCH = 'FILTER_BY_SEARCH',
}
