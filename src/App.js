import React, { useState } from "react";
import CertificateForm from "./components/CertificateForm";
import EliteCertificate from "./components/EliteCertificate";
import certificateData from "./data/certificateData";
import "./App.css";

function App() {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyCertificate = () => {
    if (!certificateId.trim()) {
      setError("Please enter Certificate ID");
      return;
    }

    setLoading(true);
    setError("");
    setCertificate(null);

    setTimeout(() => {
      const data = certificateData[certificateId.toUpperCase()];

      if (data && data.status === "VALID") {
        setCertificate(data);
      } else {
        setError("Certificate not found or invalid");
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Amdox</h2>
        <span>Internship Certificate Verification System</span>
      </nav>

      <section className="hero">
        <h1>Verify Internship Certificate</h1>
        <p>
          This system allows students to verify and download their internship
          certificates using a unique certificate ID.
        </p>
      </section>

      <div className="card">
        <h3>Certificate Verification</h3>

        <CertificateForm
          certificateId={certificateId}
          setCertificateId={setCertificateId}
          verifyCertificate={verifyCertificate}
          loading={loading}
        />

        {loading && <p className="info">Verifying certificate...</p>}
        {error && <p className="error">{error}</p>}
      </div>

      {certificate && (
        <EliteCertificate
          certificate={certificate}
          certificateId={certificateId}
        />
      )}

      <footer className="footer">
        © {new Date().getFullYear()} Amdox Pvt Ltd. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
