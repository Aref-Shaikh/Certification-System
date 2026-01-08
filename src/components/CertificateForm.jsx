import React from "react";

const CertificateForm = ({
  certificateId,
  setCertificateId,
  verifyCertificate,
  loading
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Certificate ID (eg: AMD001)"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
        style={{ width: "100%", padding: 10 }}
      />

      <button
        onClick={verifyCertificate}
        disabled={loading}
        style={{
          width: "100%",
          padding: 10,
          marginTop: 10,
          backgroundColor: loading ? "#9ca3af" : "#2563eb",
          color: "white",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Verifying..." : "Verify Certificate"}
      </button>
    </>
  );
};

export default CertificateForm;
