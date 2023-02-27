import { useState } from "react";
import "./Project.scss";

import { Header2 } from "./Header2/Header2";

import METABOLCX from "../assets/projects/METABLOCX.pdf";
import { Row, Col } from "antd";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Meta = () => {
  const [defaultPdfFile] = useState(METABOLCX);
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
        <Row className="pdf-container">
          <Col span={24}>
            <Document
              file={defaultPdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  renderMode="canvas"
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ))}
            </Document>
          </Col>
        </Row>
      </center>
    </>
  );
};
