import { useState } from "react";
import MBPDF from "../../../assets/projects/interiorDesign/MicroBehemoths.pdf";
import MBMobilePDF from "../../../assets/projects/interiorDesign/MicroBehemoths_mobile.pdf";
import Project from "../../project.js";

export const MB = () => {
  const [defaultPdfFile] = useState(MBPDF);
  const [mobilePdfFile] = useState(MBMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
      video="true"
    ></Project>
  );
};
