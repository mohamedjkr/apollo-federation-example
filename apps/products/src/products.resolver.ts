import { Resolver, Query, ResolveReference } from '@nestjs/graphql'

@Resolver('Product')
export class ProductsResolver {
  private data = [
    { sku: 'sku01', name: 'Product 01', price: 120, inventory: 15 },
    { sku: 'sku02', name: 'Product 02', price: 310, inventory: 40 },
    { sku: 'sku03', name: 'Product 03', price: 200, inventory: 5 },
  ]

  @Query('getProducts')
  getProducts() {
    return this.data
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; sku: string }) {
    const product = this.data.find((product) => product.sku === reference.sku)
    if (!product) {
      throw new Error(`Unable to find product by sku "${reference.sku}"`)
    }

    return product
  }
}
