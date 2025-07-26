import React from "react";

export default function HomePage() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "linear-gradient(to bottom right, #dbeafe, #ffffff)",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: "40px",
  };

  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#374151",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>APP</h1>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Vendor</h2>
          <button style={buttonStyle}>Enter as Vendor</button>
        </div>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Seller</h2>
          <button style={{ ...buttonStyle, backgroundColor: "#16a34a" }}>Enter as Seller</button>
        </div>
      </div>
    </div>
  );
}

