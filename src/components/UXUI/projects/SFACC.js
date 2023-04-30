import { useState } from "react";
import SFACCPDF from "../../../assets/projects/uxui/SFACC.pdf";
import Project from "../../project.js";

export const SFACC = () => {
  const [defaultPdfFile] = useState(SFACCPDF);
  const [mobilePdfFile] = useState(SFACCPDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
