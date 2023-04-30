import { useState } from "react";
import MenuWizardPDF from "../../../assets/projects/uxui/menuWizard.pdf";
import Project from "../../project.js";

export const MenuWizard = () => {
  const [defaultPdfFile] = useState(MenuWizardPDF);
  const [mobilePdfFile] = useState(MenuWizardPDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
