import { useEffect, useState } from "react";
import "./Project.scss";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Header2 } from "./Header2/Header2";

// import Steelcase from "../assets/projects/STEELCASE.pdf";
import SteelcaseMobile from "../assets/projects/Steelcase_mobile.pdf";

export const Next = () => {
  // const [defaultPdfFile] = useState(Steelcase);
  const [mobilePdfFile] = useState(SteelcaseMobile);
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
        {/* <div className="pdf-container desktop">
          <Document file={defaultPdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                renderMode="canvas"
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div> */}
        <div className="pdf-container">
          <Document file={mobilePdfFile} onLoadSuccess={onDocumentLoadSuccess}>
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
