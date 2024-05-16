export interface VolatileMemoryPorperties {
    token: string;
    isTempToken: boolean;
  }
  
  // This method is to keep the token in memory so that we can use it throughout the application.
  const volatileMemory: VolatileMemoryPorperties = {
    token: '',
    isTempToken: false,
  };
  
  export default volatileMemory;