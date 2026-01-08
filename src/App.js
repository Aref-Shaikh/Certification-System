import React, { useState, useEffect } from "react";
import CertificateForm from "./components/CertificateForm";
import EliteCertificate from "./components/EliteCertificate";
import Login from "./components/Login";
import Register from "./components/Register";
import certificateData from "./data/certificateData";
import "./App.css";

function App() {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Error parsing user data:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setCertificate(null);
  };

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

  // Show login/register pages if not authenticated
  if (showLogin) {
    return (
      <div className="app">
        <nav className="navbar">
          <h2>Amdox</h2>
          <span>Internship Certificate Verification System</span>
        </nav>
        <Login 
          onLogin={handleLogin} 
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }} 
        />
        <footer className="footer">
          © {new Date().getFullYear()} Amdox Pvt Ltd. All Rights Reserved.
        </footer>
      </div>
    );
  }

  if (showRegister) {
    return (
      <div className="app">
        <nav className="navbar">
          <h2>Amdox</h2>
          <span>Internship Certificate Verification System</span>
        </nav>
        <Register 
          onRegister={handleRegister} 
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }} 
        />
        <footer className="footer">
          © {new Date().getFullYear()} Amdox Pvt Ltd. All Rights Reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Amdox</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span>Internship Certificate Verification System</span>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontSize: "0.9rem" }}>Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.3)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.2)";
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "rgba(255,255,255,0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "rgba(255,255,255,0.2)";
              }}
            >
              Login
            </button>
          )}
        </div>
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
