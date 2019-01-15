import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

export const userProviders = [
  {
    provide: 'UserProviderToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken'],
  },
];
