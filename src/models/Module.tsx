import BaseModel, { BaseProperties } from './BaseModel';

export enum ModuleType {
  SECURITY = 'SECURITY',
  MINT = 'MINT',
  DRAWDOWN = 'DRAWDOWN',
  ISSUE = 'ISSUE',
  TREASURY = 'TREASURY',
  AUTHORITY = 'AUTHORITY',
  AGENT = 'AGENT',
  PAYMENT = 'PAYMENT',
}

export interface ModuleProperties extends BaseProperties {
  type: ModuleType;
}

export default class Module extends BaseModel<ModuleProperties> {
  public type: ModuleType;

  public constructor(properties: ModuleProperties) {
    super(properties);
    const { type } = properties;
    this.type = type;
  }
}
