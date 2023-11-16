export interface ITool {
  "name": string;
  "color": string;
  "icon": string;
  "white": boolean;
}
export interface IExperience {
  body: string;
  company: string;
  location: string;
  period: string;
  link: ILink;
  job: string;
  logo: string;
}

export interface ILink {
  text: string;
  href: string;
}

export interface ISocial {
  name:  string;
  url:   string;
  icon:  string;
  color: string;
}

