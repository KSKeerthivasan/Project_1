import React from 'react';
import { Link } from 'react-router-dom'; // 🔁 Add this

function Homepage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#2c2c2c", padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <style>{`
        @media (max-width: 768px) {
          .flex-wrap {
            flex-direction: column;
            align-items: center;
          }
          .card, .feature {
            width: 90% !important;
          }
        }
      `}</style>

      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1><span style={{ color: "#913d8a" }}>Choose Your Path</span></h1>
        <p>
          Join our marketplace and start growing your business today.
          Whether you're an established seller or a mobile street vendor,
          we have the perfect solution for you.
        </p>
      </section>

      <section style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px"
      }} className="flex-wrap">
        {/* Seller Card */}
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "45%",
          overflow: "hidden"
        }} className="card">
          <img src="/images/seller.jpg" alt="Seller" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
          <div style={{ padding: "20px" }}>
            <h2>Seller</h2>
            <p>Perfect for established businesses looking to expand their online presence with professional tools and analytics.</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>✅ Professional storefront setup</li>
              <li>✅ Advanced inventory management</li>
              <li>✅ Detailed sales analytics</li>
              <li>✅ Customer relationship tools</li>
              <li>✅ Marketing automation</li>
            </ul>
            <Link to="/login" state={{ from: "/seller" }}>
              <button style={{
                marginTop: "15px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                backgroundColor: "#f9a825",
                color: "#fff",
                cursor: "pointer"
              }}>Get Started as Seller →</button>
            </Link>
          </div>
        </div>

        {/* Vendor Card */}
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "45%",
          overflow: "hidden"
        }} className="card">
          <img src="/images/vendor.jpeg" alt="Vendor" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
          <div style={{ padding: "20px" }}>
            <h2>Street Vendor</h2>
            <p>Ideal for mobile vendors and food trucks wanting to connect with customers and manage orders on the go.</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>✅ Mobile-first design</li>
              <li>✅ Location-based services</li>
              <li>✅ Quick-order processing</li>
              <li>✅ Real-time notifications</li>
              <li>✅ Flexible payment options</li>
            </ul>
            <Link to="/vendor">
              <button style={{
                marginTop: "15px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                backgroundColor: "#6a1b9a",
                color: "#fff",
                cursor: "pointer"
              }}>Get Started as Street Vendor →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {/* (Keep the rest as-is) */}
    </div>
  );
}

export default Homepage;
