import path from 'path'
import { Module } from '@nestjs/common'
import { GraphQLFederationModule } from '@nestjs/graphql'
import { CampaignsResolver } from './campaigns.resolver'

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [path.join(__dirname, 'schema.gql')],
    }),
  ],
  providers: [CampaignsResolver],
})
export class CampaignsModule {}
