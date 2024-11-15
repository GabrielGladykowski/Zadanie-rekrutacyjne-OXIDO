import React from "react";
import { ErrorMessageStyled } from "./ErrorMessage.styled";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <ErrorMessageStyled>{error}</ErrorMessageStyled>;
};

export default ErrorMessage;
