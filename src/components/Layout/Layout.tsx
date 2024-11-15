import React from "react";
import { LayoutContainerStyled, LayoutHeaderStyled } from "./Layout.style";

const Layout: React.FC = () => {
  return (
    <LayoutContainerStyled>
      <LayoutHeaderStyled>AI HTML Generator</LayoutHeaderStyled>
    </LayoutContainerStyled>
  );
};

export default Layout;
