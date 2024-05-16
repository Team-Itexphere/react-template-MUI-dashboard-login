import Agent from './Agent';
import BaseModel, { BaseProperties } from './BaseModel';
import Group from './Group';

export interface UserProperties extends BaseProperties {
  fullName: string;
  email: string;
  phoneNo: string;
  requireChangePassword?: boolean;
  deletedAt?: Date;
  agent: Agent;
  userGroups?: Group[];
  lastLogin?: Date;
  userRoles?: UserRole[];
}

export interface UserRole {
  id: string;
  userId: string;
}

export interface UserCreateProperties {
  fullName: string;
  email: string;
  phoneNo: string;
  password: string;
  requireChangePassword?: boolean;
  agentId?: string;
  roles: number[];
}

export interface ManageRoleProperties {
  userId: string;
}

export interface AddUserFormProperties {
  fullName: string;
  phoneNo: string;
  password: string;
  email: string;
  requireChangePassword?: boolean;
  agentId?: string;
}

export default class User extends BaseModel<UserProperties> {
  public fullName: string;
  public email: string;
  public phoneNo: string;
  public agent: Agent;
  public requireChangePassword?: boolean;
  public deletedAt?: Date;
  public userGroups?: Group[];
  public lastLogin?: Date;
  public userRoles?: UserRole[];

  public constructor(properties: UserProperties) {
    super(properties);

    const { email, fullName, phoneNo, requireChangePassword, deletedAt, agent, userGroups, lastLogin, userRoles } =
      properties;

    this.fullName = fullName;
    this.email = email;
    this.phoneNo = phoneNo;
    this.agent = agent;
    this.userGroups = userGroups;
    this.requireChangePassword = requireChangePassword;
    this.deletedAt = deletedAt;
    this.lastLogin = lastLogin;
    this.userRoles = userRoles;
  }
}
