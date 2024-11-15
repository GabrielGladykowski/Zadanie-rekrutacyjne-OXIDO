import React from "react";
import { sendToOpenAI } from "../../api/openaiApi";
import {
  GenerateButtonContainerStyled,
  GenerateButtonStyled,
} from "./GenerateButton.styled";

interface GenerateButtonProps {
  articleContent: string;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  loading: boolean;
  generatedArticle: string | null;
  setGeneratedArticle: (content: string) => void;
}

const downloadFile = (fileName: string, content: string): void => {
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

const createHtmlTemplate = (): string => {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Szablon Artykułu</title>
  <style>
    body { font-family: monospace; padding: 20px; }
    h1 { color: #004bc8; font-size: 68px; }
    p { color: #000000; font-size: 16px; }
  </style>
</head>
<body>
  <!-- Wklej tutaj treść artykułu -->

  <script>
    // Wklej tutaj kod JS
  </script>
</body>
</html>`;
};

const extractBodyContent = (html: string): string => {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
};

const createHtmlPreview = (articleContent: string): string => {
  const bodyContent = extractBodyContent(articleContent);

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Podgląd Artykułu</title>
  <style>
    body { font-family: monospace; padding: 20px; }
    h1 { color: #004bc8; font-size: 68px; }
    h2 { color: #004bc8; font-size: 48px; }
    p { color: #000000; font-size: 20px; }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
};

const GenerateButton = ({
  articleContent,
  setLoading,
  setError,
  loading,
  generatedArticle,
  setGeneratedArticle,
}: GenerateButtonProps) => {
  const handleGenerate = async () => {
    setLoading(true);
    setError(null);

    try {
      const generatedHtml = await sendToOpenAI(articleContent);
      setGeneratedArticle(generatedHtml);
      setLoading(false);

      downloadFile("article.html", generatedHtml);
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
    <GenerateButtonContainerStyled>
      <GenerateButtonStyled onClick={handleGenerate} disabled={loading}>
        {loading ? "Processing..." : "Generate HTML"}
      </GenerateButtonStyled>

      <GenerateButtonStyled
        onClick={() => downloadFile("szablon.html", createHtmlTemplate())}
      >
        Download HTML Template
      </GenerateButtonStyled>

      {generatedArticle && (
        <GenerateButtonStyled
          onClick={() =>
            downloadFile("podglad.html", createHtmlPreview(generatedArticle))
          }
        >
          Download HTML Preview
        </GenerateButtonStyled>
      )}
    </GenerateButtonContainerStyled>
  );
};

export default GenerateButton;
