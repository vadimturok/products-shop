import { IProduct } from '../types'

export const findMaxPrice = (products: IProduct[]) => {
   let max = products[0].price
   products.forEach((product) => product.price > max && (max = product.price))
   return max
}
