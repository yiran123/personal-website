import { useState } from "react";
import "./Project.scss";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Header2 } from "./Header2/Header2";

import METABOLCX from "../assets/projects/METABLOCX.pdf";
import { Row, Col } from "antd";

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
