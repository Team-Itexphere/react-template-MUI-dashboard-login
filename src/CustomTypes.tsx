export interface KeyValuePair<T = any> {
    [key: string]: T;
  }
  
  export interface RecordListing<T> {
    data: T[];
    total: number;
  }
  
  export interface ListingQuery {
    orderBy?: string;
    orderDirection?: 'ASC' | 'DESC';
    offset?: number;
    limit?: number;
  }