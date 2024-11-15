import React from "react";
import { sendToOpenAI } from "../../api/openaiApi";
import { GenerateButtonStyled } from "./GenerateButton.styled";

interface GenerateButtonProps {
  articleContent: string;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  loading: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  articleContent,
  setLoading,
  setError,
  loading,
}) => {
  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      await sendToOpenAI(articleContent);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    }
  };

  return (
    <GenerateButtonStyled onClick={handleClick} disabled={loading}>
      {loading ? "Processing..." : "Generate HTML"}
    </GenerateButtonStyled>
  );
};

export default GenerateButton;
