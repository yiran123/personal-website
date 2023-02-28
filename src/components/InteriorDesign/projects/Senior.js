import { useState } from "react";
import SeniorLivingMobilePDF from "../../../assets/projects/interiorDesign/SeniorLiving_mobile.pdf";
import Project from "../../project.js";

export const Senior = () => {
  const [defaultPdfFile] = useState(SeniorLivingMobilePDF);
  const [mobilePdfFile] = useState(SeniorLivingMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
