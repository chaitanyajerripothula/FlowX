import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7fafc"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "1rem" }}>Welcome to React TS Starter</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
        This is a minimal landing page. Start building your awesome app!
      </p>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{
        padding: "0.75rem 1.5rem",
        background: "#2563eb",
        color: "#fff",
        borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: 600
      }}>
        Learn React
      </a>
    </div>
  );
};

export default LandingPage;
