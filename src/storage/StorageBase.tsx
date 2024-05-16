import Cookies from 'universal-cookie';

export type SessionTypes = 'cookie' | 'session';
export interface StorageBaseOptions {
  sessionType: SessionTypes;
}

//Store and Get data to session or cookie storage in the browser
export default class StorageBase<T = string> {
  public name: string;

  public cookies: Cookies;
  public temporaryStorage?: any;
  public sessionType: SessionTypes = 'cookie';

  public constructor(name: string) {
    this.name = name;
    this.cookies = new Cookies();
    if (sessionStorage.getItem(this.name) !== null) {
      this.sessionType = 'session';
    }
  }

  public set<U = T>(value: U, options: StorageBaseOptions = { sessionType: 'cookie' }) {
    const {
      sessionType,
      ...others
    } = options;
    this.sessionType = sessionType;
    switch (sessionType) {
      case 'session': sessionStorage.setItem(this.name, JSON.stringify(value)); break;
      default: this.cookies.set(this.name, value, others); break;
    }
  }

  public get<U = T>(): U {
    switch (this.sessionType) {
      case 'session': return JSON.parse(sessionStorage.getItem(this.name) || '{}');
      default: return this.cookies.get(this.name);
    }

  }

  public clear() {
    switch (this.sessionType) {
      case 'session': sessionStorage.removeItem(this.name); break;
      default: this.cookies.remove(this.name); break;
    }
  }

  public isEmpty(): boolean {
    switch (this.sessionType) {
      case 'session': return sessionStorage.getItem(this.name) === null;
      default: return !this.cookies.get(this.name);
    }
  }
}