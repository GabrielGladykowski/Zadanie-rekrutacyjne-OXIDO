import styled from "styled-components";
import { theme } from "../../theme/theme";

const FileUploaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FileUploaderInputStyled = styled.input`
  display: none;
`;

const FileUploaderButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  border: 2px solid ${theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${theme.fontSize.button};
  cursor: pointer;
  transition: ${theme.transition.button};

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }

  &:disabled {
    background-color: ${theme.colors.disabled};
    cursor: not-allowed;
  }
`;

export {
  FileUploaderInputStyled,
  FileUploaderButtonStyled,
  FileUploaderContainerStyled,
};
