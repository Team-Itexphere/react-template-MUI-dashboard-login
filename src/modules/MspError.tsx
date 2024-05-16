import { KeyValuePair } from '../CustomTypes';

export default class MspError extends Error {
  public type: string;
  public details?: KeyValuePair;

  constructor(type: string, details: KeyValuePair = {}) {
    super(
      JSON.stringify({
        type,
        details,
      }),
    );
    this.type = type;
    this.details = details;
  }
}