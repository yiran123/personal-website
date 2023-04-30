import { useState } from "react";
import SteelcasePDF from "../../../assets/projects/interiorDesign/STEELCASE.pdf";
import SteelcaseMobilePDF from "../../../assets/projects/interiorDesign/STELLCASE_MOBILE.pdf";
import Project from "../../project.js";

export const Next = () => {
  const [defaultPdfFile] = useState(SteelcasePDF);
  const [mobilePdfFile] = useState(SteelcaseMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
