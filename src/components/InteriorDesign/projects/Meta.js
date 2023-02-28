import { useState } from "react";
import MetaBlocxPDF from "../../../assets/projects/interiorDesign/METABLOCX.pdf";
import MetaBlocxMobilePDF from "../../../assets/projects/interiorDesign/METABLOCX_Mobile.pdf";
import Project from "../../project.js";
export const Meta = () => {
  const [defaultPdfFile] = useState(MetaBlocxPDF);
  const [mobilePdfFile] = useState(MetaBlocxMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
