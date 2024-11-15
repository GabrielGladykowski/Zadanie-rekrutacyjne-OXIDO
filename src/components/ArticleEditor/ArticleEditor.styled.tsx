import styled from "styled-components";
import { theme } from "../../theme/theme";

const ArticleEditorTextAreaStyled = styled.textarea`
  max-width: 1024px;
  width: 100%;
  max-height: 100%;
  height: 250px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: ${theme.fontSize.text};
`;

export { ArticleEditorTextAreaStyled };
