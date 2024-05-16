export interface BaseProperties {
  id: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export default abstract class BaseModel<T extends BaseProperties = BaseProperties> extends Object {
  public id: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor({ id, createdAt, updatedAt }: BaseProperties) {
    super();
    this.id = id;
    if (createdAt) {
      this.createdAt = new Date(createdAt);
    }
    if (updatedAt) {
      this.updatedAt = new Date(updatedAt);
    }
  }

  set<U = T>(properties: { [field in keyof U]?: U[field] }): this {
    Object.assign(this, properties);
    return this;
  }
}
