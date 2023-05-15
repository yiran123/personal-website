import { useState } from "react";
import BirdcageRestaurantMobilePDF from "../../../assets/projects/interiorDesign/The_Birdcage_Restaurant_mobile.pdf";
import BirdcageRestaurantPDF from "../../../assets/projects/interiorDesign/The_Birdcage_Restaurant.pdf";
import Project from "../../project.js";

export const Birdcage = () => {
  const [defaultPdfFile] = useState(BirdcageRestaurantPDF);
  const [mobilePdfFile] = useState(BirdcageRestaurantMobilePDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
