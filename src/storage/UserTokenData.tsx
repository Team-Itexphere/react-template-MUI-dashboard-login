import StorageBase from './StorageBase';

export interface UserTokenData {
    token: string;
  }
  
  const userTokenStorage: StorageBase<UserTokenData> = new StorageBase<UserTokenData>('token');
  
  export default userTokenStorage;