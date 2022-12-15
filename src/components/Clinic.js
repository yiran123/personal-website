import { useState } from "react";
import "./Project.scss";

import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

import { Header2 } from "./Header2/Header2";

import FertilityCare from "../assets/projects/FertilityCare.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Clinic = () => {
  const [defaultPdfFile] = useState(FertilityCare);
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
