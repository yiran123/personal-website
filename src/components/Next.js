import { useEffect, useState } from "react";
import "./Project.scss";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Header2 } from "./Header2/Header2";

import Steelcase from "../assets/projects/STEELCASE.pdf";
import SteelcaseMobile from "../assets/projects/Steelcase_mobile.pdf";

import { Row, Col } from "antd";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export const Next = () => {
  const [defaultPdfFile] = useState(Steelcase);
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
        <Row className="pdf-container desktop">
          <Col span={24}>
            <Document
              file={defaultPdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
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
        <Row className="pdf-container mobile">
          <Col span={24}>
            <Document
              file={mobilePdfFile}
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
