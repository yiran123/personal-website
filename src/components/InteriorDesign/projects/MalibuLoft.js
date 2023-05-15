import { useState } from "react";
import LAMalibuLoftPDF from "../../../assets/projects/interiorDesign/LA_Malibu_Loft.pdf";
import LAMalibuLoftMobilePDF from "../../../assets/projects/interiorDesign/LA_Malibu_Loft_mobile.pdf";
import Project from "../../project.js";

export const MalibuLoft = () => {
  const [defaultPdfFile] = useState(LAMalibuLoftPDF);
  const [mobilePdfFile] = useState(LAMalibuLoftMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
