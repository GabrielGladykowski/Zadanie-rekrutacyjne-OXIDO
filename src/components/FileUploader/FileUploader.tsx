import React from "react";
import {
  FileUploaderInputStyled,
  FileUploaderButtonStyled,
  FileUploaderContainerStyled,
} from "./FileUploader.styled";

interface FileUploaderProps {
  onFileLoad: (content: string) => void;
}

const FileUploader = ({ onFileLoad }: FileUploaderProps) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileRead = (element: React.ChangeEvent<HTMLInputElement>) => {
    const file = element.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onFileLoad(reader.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <FileUploaderContainerStyled>
      <FileUploaderButtonStyled onClick={handleButtonClick}>
        Upload File
      </FileUploaderButtonStyled>
      <FileUploaderInputStyled
        type="file"
        accept=".txt"
        onChange={handleFileRead}
        ref={fileInputRef}
      />
    </FileUploaderContainerStyled>
  );
};

export default FileUploader;
