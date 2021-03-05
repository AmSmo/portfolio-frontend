import { Location } from "react-router-dom";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

export type SwitchProps = {
  location: Location;
};

export type LanguageType = {
  icon: string;
  name: string;
};

export type ProjectType = {
  name: string;
  frontend?: string;
  backend?: string;
  deploy?: string;
  description: string;
  video?: string;
  languages: [LanguageType] | null;
};
