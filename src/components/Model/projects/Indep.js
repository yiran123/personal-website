import { useState } from "react";
import IndepChairCabinetPDF from "../../../assets/projects/model/Indep_Chair_Cabinet.pdf";
import IndepChairCabinetMobilePDF from "../../../assets/projects/model/Indep_Chair_Cabinet_Mobile.pdf";
import Project from "../../project.js";

export const Indep = () => {
  const [defaultPdfFile] = useState(IndepChairCabinetPDF);
  const [mobilePdfFile] = useState(IndepChairCabinetMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
