import { userProviders } from './user.provider';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders],
})
export class UsersModule {}
