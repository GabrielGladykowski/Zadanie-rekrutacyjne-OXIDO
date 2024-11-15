import React from "react";
import { ArticleEditorTextAreaStyled } from "./ArticleEditor.styled";

interface ArticleEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({ content, onChange }) => {
  return (
    <ArticleEditorTextAreaStyled
      value={content}
      onChange={(element) => onChange(element.target.value)}
      placeholder="Paste the article or use the button to upload a file..."
    />
  );
};

export default ArticleEditor;
