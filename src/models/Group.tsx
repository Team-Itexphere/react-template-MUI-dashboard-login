import BaseModel, { BaseProperties } from './BaseModel';
import Module, { ModuleType } from './Module';
import User from './User';

export interface GroupProperties extends BaseProperties {
  name: string;
  module: Module;
  users: User[];
  deletedAt?: string | Date;
}

export interface GroupCreateProperties {
  name: string;
  moduleType?: ModuleType;
  userEmails?: string[];
}

export interface GroupUpdateProperties {
  userEmails?: string[];
}

export default class Group extends BaseModel<GroupProperties> {
  public name: string;
  public users: User[];
  public module: Module;
  public deletedAt?: string | Date;

  public constructor(properties: GroupProperties) {
    super(properties);

    const { name, module, users, deletedAt } = properties;

    this.name = name;
    this.users = users;
    this.module = module;

    if (deletedAt) {
      this.deletedAt = new Date(deletedAt);
    }
  }

  public get groupName(): string {
    const map: { [type in ModuleType]: string } = {
      SECURITY: 'Security',
      MINT: 'Minting',
      DRAWDOWN: 'Drawdown',
      ISSUE: 'Issuance',
      TREASURY: 'Treasury',
      AUTHORITY: 'Authority',
      AGENT: 'Agent',
      PAYMENT: 'Payment',
    };

    return map[this.module.type];
  }
}
