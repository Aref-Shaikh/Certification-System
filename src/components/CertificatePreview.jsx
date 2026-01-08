import React from "react";
import jsPDF from "jspdf";

function CertificatePreview({ certificate }) {

  const downloadPDF = () => {
    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("CERTIFICATE OF COMPLETION", 35, 30);

    pdf.setFontSize(12);
    pdf.text(`This is to certify that ${certificate.name}`, 20, 60);
    pdf.text(`has successfully completed the`, 20, 70);
    pdf.text(`${certificate.domain}`, 20, 80);
    pdf.text(`Duration: ${certificate.startDate} - ${certificate.endDate}`, 20, 90);
    pdf.text(`Issued by: ${certificate.company}`, 20, 110);

    pdf.save("Internship_Certificate.pdf");
  };

  return (
    <div style={{ border: "2px solid #2563eb", padding: 15, marginTop: 20 }}>
      <h3>Certificate Preview</h3>
      <p><b>Name:</b> {certificate.name}</p>
      <p><b>Domain:</b> {certificate.domain}</p>
      <p><b>Duration:</b> {certificate.startDate} - {certificate.endDate}</p>
      <p><b>Company:</b> {certificate.company}</p>

      <button
        onClick={downloadPDF}
        style={{
          marginTop: 10,
          padding: 10,
          width: "100%",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none"
        }}
      >
        Download Certificate (PDF)
      </button>
    </div>
  );
}

export default CertificatePreview;
