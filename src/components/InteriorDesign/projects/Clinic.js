import { useState } from "react";
import FertilityCareMobilePDF from "../../../assets/projects/interiorDesign/FertilityCare_mobile.pdf";
import Project from "../../project.js";

export const Clinic = () => {
  const [defaultPdfFile] = useState(FertilityCareMobilePDF);
  const [mobilePdfFile] = useState(FertilityCareMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
