import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { RemBody, ZoomCtrl } from "../styles/styles";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
type ResumeProps = {};

const Resume: React.FC<ResumeProps> = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [scale, setScale] = useState<number>(
    window.innerWidth <= 600 ? 0.6 : 1
  );
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <section
      style={{ display: loading ? "none" : "inherit" }}
      className="scale-in-center"
    >
      <ZoomCtrl>
        <span onClick={() => setScale((prevScale) => prevScale + 0.1)}>+</span>
        <span onClick={() => setScale((prevScale) => prevScale - 0.1)}>-</span>
      </ZoomCtrl>
      <RemBody>
        <Document
          className="resume"
          file={"../Static/CurrentResume.pdf"}
          externalLinkTarget={"_blank"}
          onLoadSuccess={() => {
            setLoading(false);
            window.scrollTo(0, 0);
          }}
        >
          <Page pageNumber={1} scale={scale} />
        </Document>
      </RemBody>
    </section>
  );
};

export default Resume;
