export interface ICopy {
  from: string;
  to: string;
}

export interface IConfig {
  copy?: ICopy[] | string[];
}
