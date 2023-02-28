import { useState } from "react";
import CurvedPathMobilePDF from "../../../assets/projects/interiorDesign/CurvedPath_mobile.pdf";
import Project from "../../project.js";

export const CurvedPath = () => {
  const [defaultPdfFile] = useState(CurvedPathMobilePDF);
  const [mobilePdfFile] = useState(CurvedPathMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
