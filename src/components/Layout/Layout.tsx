import React, { useState } from "react";
import { LayoutContainerStyled, LayoutHeaderStyled } from "./Layout.styled";
import FileUploader from "../FileUploader/FileUploader";
import ArticleEditor from "../ArticleEditor/ArticleEditor";
import GenerateButton from "../GenerateButton/GenerateButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Layout = () => {
  const [articleContent, setArticleContent] = useState<string>("");
  const [generatedArticle, setGeneratedArticle] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <LayoutContainerStyled>
      <LayoutHeaderStyled>AI HTML Generator</LayoutHeaderStyled>
      <FileUploader onFileLoad={setArticleContent} />
      <ArticleEditor content={articleContent} onChange={setArticleContent} />
      <GenerateButton
        articleContent={articleContent}
        setLoading={setLoading}
        setError={setError}
        loading={loading}
        generatedArticle={generatedArticle}
        setGeneratedArticle={setGeneratedArticle}
      />
      {error && <ErrorMessage error={error} />}
    </LayoutContainerStyled>
  );
};

export default Layout;
