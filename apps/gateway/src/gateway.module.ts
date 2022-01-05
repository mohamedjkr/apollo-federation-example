import { Module } from '@nestjs/common'
import { GraphQLGatewayModule } from '@nestjs/graphql'

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [
          { url: 'http://localhost:3001/graphql', name: 'products-service' },
          { url: 'http://localhost:3002/graphql', name: 'campaigns-service' },
        ],
        experimental_pollInterval: 5500,
      },
    }),
  ],
})
export class GatewayModule {}
