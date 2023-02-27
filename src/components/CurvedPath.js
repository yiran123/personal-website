import { useState } from "react";
import "./Project.scss";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Header2 } from "./Header2/Header2";

import CURVEDPATH from "../assets/projects/CurvedPath.pdf";

export const CurvedPath = () => {
  const [defaultPdfFile] = useState(CURVEDPATH);
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
