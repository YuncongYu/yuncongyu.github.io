declare module "@fontsource/*" {}
declare module "@fontsource-variable/*" {}

declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
