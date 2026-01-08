import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./EliteCertificate.css";

function EliteCertificate({ certificate, certificateId }) {
  const certRef = useRef();
  const issueDate = new Date().toLocaleDateString();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(certRef.current, {
      scale: 4,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
    pdf.save(`${certificate.name}_${certificateId}.pdf`);
  };

  return (
    <>
      <div className="exact-cert-page">
        <div className="exact-cert-border" ref={certRef}>

          <div className="watermark">{certificate.company}</div>

          <p className="cert-title">CERTIFICATE</p>
          <p className="cert-subtitle">OF INTERNSHIP</p>

          <div className="gold-divider">
            <span></span>
          </div>

          <p className="cert-text">
            THIS IS TO CERTIFY THAT
          </p>

          <h1 className="cert-name">{certificate.name}</h1>

          <p className="cert-body">
            has successfully completed the <b>{certificate.domain}</b> internship
            at <b>{certificate.company}</b> from{" "}
            <b>{certificate.startDate}</b> to{" "}
            <b>{certificate.endDate}</b>.
            <br /><br />
            During this internship, the candidate demonstrated dedication,
            professionalism, and technical competence.
          </p>

          <div className="cert-meta">
            <span>Certificate ID: {certificateId}</span>
            <span>Issued On: {issueDate}</span>
          </div>

          <div className="cert-footer">
            <div className="footer-sign">
              <span>{certificate.ceo}</span>
              <p>CEO</p>
            </div>

            <div className="footer-seal"></div>

            <div className="footer-sign">
              <span>{certificate.manager}</span>
              <p>Program Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <button className="download-btn" onClick={handleDownloadPDF}>
          Download Certificate (PDF)
        </button>
      </div>
    </>
  );
}

export default EliteCertificate;
