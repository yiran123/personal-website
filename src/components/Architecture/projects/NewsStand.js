import { useState } from "react";
import NewStandPDF from "../../../assets/projects/architecture/newsStand.pdf";
import NewStanMobilePDF from "../../../assets/projects/architecture/newsStand_mobile.pdf";
import Project from "../../project.js";
export const NewsStand = () => {
  const [defaultPdfFile] = useState(NewStandPDF);
  const [mobilePdfFile] = useState(NewStanMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
