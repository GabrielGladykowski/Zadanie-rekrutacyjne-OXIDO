import React, { useState } from "react";
import { LayoutContainerStyled, LayoutHeaderStyled } from "./Layout.styled";
import FileUploader from "../FileUploader/FileUploader";
import ArticleEditor from "../ArticleEditor/ArticleEditor";

const Layout: React.FC = () => {
  const [articleContent, setArticleContent] = useState<string>("");

  return (
    <LayoutContainerStyled>
      <LayoutHeaderStyled>AI HTML Generator</LayoutHeaderStyled>
      <FileUploader onFileLoad={setArticleContent} />
      <ArticleEditor content={articleContent} onChange={setArticleContent} />
    </LayoutContainerStyled>
  );
};

export default Layout;
