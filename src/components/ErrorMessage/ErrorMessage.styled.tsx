import styled from "styled-components";
import { theme } from "../../theme/theme";

const ErrorMessageStyled = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${theme.fontSize.text};
`;

export { ErrorMessageStyled };
