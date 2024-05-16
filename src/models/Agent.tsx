import BaseModel, { BaseProperties } from './BaseModel';

export type AgentType = 'AUTHORITY' | 'AGENT';
export type AgentStatusType = 'ACTIVE' | 'SUSPENDED';
export type AgentWhiteLabelAppParticipateStatus = 'PARTICIPATE' | 'NOT_PARTICIPATE';

export enum AgentStatusSentenceEnum {
  ACTIVE = 'Active',
  SUSPENDED = 'Suspended',
}

export enum AgentWhiteLabelAppParticipateStatusSentenceEnum {
  PARTICIPATE = 'Participant',
  NOT_PARTICIPATE = 'Not Participant',
}
export enum TypeSentenceEnum {
  AUTHORITY = 'Authority',
  AGENT = 'Agent',
}
export interface AgentSummary {
  cardCount: number;
}

export interface ThemeOption {
  label: string;
  id: string;
  value: { r: number; g: number; b: number; a: number | undefined } | null;
}
export interface AgentProperties extends BaseProperties {
  id: string;
  name: string;
  entityNo: string;
  type: AgentType;
  status: AgentStatusType;
  whiteLabelAppParticipate: AgentWhiteLabelAppParticipateStatus;
  createdAt?: string;
  updatedAt?: string;
  summary?: AgentSummary;
  cardlessUserLimit: number;
  countCardlessUsers?: number;
  themeConfig?: ThemeOption[];
  logoImg?: string | null;
  logoName?: string | null;
  custodialTopupIdentifier: number;
}

export interface AgentCreateProperties {
  email: string;
  agentName: string;
  phoneNo: string;
  fullName: string;
  entityNo: string;
  cardlessUserLimit: string;
  themeConfig?: ThemeOption[];
  whiteLabelAppParticipate: AgentWhiteLabelAppParticipateStatus;
  custodialTopupIdentifier?: number | null;
  // isRequirePasswordChangeAtNextLogin: boolean;
  // password?: string;
}

export interface AgentEditProperties {
  agentId: string;
  details: {
    cardlessUserLimit?: number;
    status: AgentStatusType;
    whiteLabelAppParticipate: AgentWhiteLabelAppParticipateStatus;
    custodialTopupIdentifier?: number | null;
  };
  userId: string;
}

export interface ThemeOption {
  label: string;
  id: string;
  value: { r: number; g: number; b: number; a: number | undefined } | null;
}

export interface AgentThemeEditProperties {
  agentId: string;
  themeConfig: string;
}

export default class Agent extends BaseModel<AgentProperties> {
  public name: string;
  public entityNo: string;
  public summary: AgentSummary;
  public type: AgentType;
  public status: AgentStatusType;
  public cardlessUserLimit: number;
  public countCardlessUsers: number;
  public themeConfig: ThemeOption[];
  public logoImg: string | null;
  public whiteLabelAppParticipate: AgentWhiteLabelAppParticipateStatus;
  public logoName: string | null;
  custodialTopupIdentifier: number;

  public constructor(properties: AgentProperties) {
    super(properties);
    const {
      type,
      name,
      entityNo,
      summary,
      status,
      countCardlessUsers,
      cardlessUserLimit,
      themeConfig,
      logoImg,
      whiteLabelAppParticipate,
      logoName,
      custodialTopupIdentifier,
    } = properties;
    this.name = name;
    this.entityNo = entityNo;
    this.summary = summary || {
      cardCount: 0,
    };
    this.type = type;
    this.status = status;
    this.cardlessUserLimit = cardlessUserLimit;
    this.countCardlessUsers = countCardlessUsers ? countCardlessUsers : 0;
    this.themeConfig = themeConfig ? themeConfig : [];
    this.logoImg = logoImg ? logoImg : null;
    this.whiteLabelAppParticipate = whiteLabelAppParticipate;
    this.logoName = logoName ? logoName : null;
    this.custodialTopupIdentifier = custodialTopupIdentifier;
  }

  public get statusSentence(): string {
    return AgentStatusSentenceEnum[this.status];
  }

  public get typeSentence(): string {
    return TypeSentenceEnum[this.type];
  }

  public get whiteLabelAppParticipateSentence(): string {
    return AgentWhiteLabelAppParticipateStatusSentenceEnum[this.whiteLabelAppParticipate];
  }
}
