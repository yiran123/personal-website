import { useState } from "react";
import MuseumOfEmotionsPDF from "../../../assets/projects/architecture/museumOfEmotions.pdf";
import MuseumOfEmotionsMobilePDF from "../../../assets/projects/architecture/museumOfEmotions_mobile.pdf";
import Project from "../../project.js";
export const MuseumOfEmotions = () => {
  const [defaultPdfFile] = useState(MuseumOfEmotionsMobilePDF);
  const [mobilePdfFile] = useState(MuseumOfEmotionsMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
