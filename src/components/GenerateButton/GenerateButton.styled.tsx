import styled from "styled-components";
import { theme } from "../../theme/theme";

const GenerateButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: ${theme.fontSize.button};
  cursor: pointer;
  transition: ${theme.transition.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    border: 2px solid ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const GenerateButtonContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export { GenerateButtonStyled, GenerateButtonContainerStyled };
