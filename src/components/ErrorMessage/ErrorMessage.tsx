import React from "react";
import { ErrorMessageStyled } from "./ErrorMessage.styled";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <ErrorMessageStyled>{error}</ErrorMessageStyled>;
};

export default ErrorMessage;
