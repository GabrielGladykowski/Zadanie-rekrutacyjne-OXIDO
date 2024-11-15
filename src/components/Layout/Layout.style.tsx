import styled from "styled-components";
import { theme } from "../../theme/theme";

const LayoutContainerStyled = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const LayoutHeaderStyled = styled.h1`
  text-align: center;
  font-size: ${theme.fontSize.h1};
  color: ${theme.colors.primary};
`;

export { LayoutContainerStyled, LayoutHeaderStyled };
