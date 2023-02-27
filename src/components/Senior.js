import { useState } from "react";
import "./Project.scss";

import { Header2 } from "./Header2/Header2";

import SENIORLIVING from "../assets/projects/SeniorLiving.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Senior = () => {
  const [defaultPdfFile] = useState(SENIORLIVING);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  //create new plugin instance
  return (
    <>
      <Header2 />
      <center>
        <div className="pdf-container">
          <Document file={defaultPdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                renderMode="canvas"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </center>
    </>
  );
};
