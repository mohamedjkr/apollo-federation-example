import path from 'path'
import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'
import { ProductsResolver } from './products.resolver'

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [path.join(__dirname, 'schema.gql')],
    }),
  ],
  providers: [ProductsResolver],
})
export class ProductsModule {}
