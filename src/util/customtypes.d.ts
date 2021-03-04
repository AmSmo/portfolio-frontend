import { Location } from "react-router-dom";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

export type SwitchProps = {
  location: Location;
};
