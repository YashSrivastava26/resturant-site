import { FC } from "react";

interface FooterOverlayProps {}

const FooterOverlay: FC<FooterOverlayProps> = ({}) => {
  return (
    <div className="w-full h-full z-10 flex flex-col absolute">
      <div className="h-1/4 bg-dark"></div>
      <div className="app-bg h-3/4"></div>
    </div>
  );
};

export default FooterOverlay;
