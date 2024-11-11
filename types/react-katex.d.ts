declare module "react-katex" {
  import { ReactNode, Component } from "react";

  interface KatexProps {
    children: ReactNode;
    errorColor?: string;
    renderError?: (error: Error) => ReactNode;
  }

  export class InlineMath extends Component<KatexProps> {}
  export class BlockMath extends Component<KatexProps> {}
}
