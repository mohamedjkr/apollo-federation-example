import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql'

@Resolver('Campaign')
export class CampaignsResolver {
  private data = [
    { id: 'cmp01', name: 'Campaign 01', products: ['sku01', 'sku03'] },
    { id: 'cmp02', name: 'Campaign 02', products: ['sku02'] },
  ]

  @Query('getCampaigns')
  getCampaigns() {
    return this.data
  }

  @ResolveField('products')
  getProductsField(@Parent() campaign) {
    return campaign.products.map((sku) => ({
      __typename: 'Product',
      sku,
    }))
  }

  /**
   * Called by the Gateway whenever another service returns a reference to a Campaign entity
   */
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    const campaign = this.data.find((campaign) => campaign.id === reference.id)
    if (!campaign) {
      throw new Error(`Unable to find campaign by id "${reference.id}"`)
    }

    return campaign
  }
}
