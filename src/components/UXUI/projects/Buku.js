import { useState } from "react";
import BukuPDF from "../../../assets/projects/uxui/buku.pdf";
import Project from "../../project.js";

export const Buku = () => {
  const [defaultPdfFile] = useState(BukuPDF);
  const [mobilePdfFile] = useState(BukuPDF);

  return (
    <Project
      defaultPdfFile={defaultPdfFile}
      mobilePdfFile={mobilePdfFile}
    ></Project>
  );
};
