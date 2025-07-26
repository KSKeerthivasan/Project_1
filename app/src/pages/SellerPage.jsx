import React, { useState } from "react";
import { Link } from "react-router-dom";

function SellerPage() {
  const [products] = useState([
    { id: 1, name: "Burger Bun", stock: 50 },
    { id: 2, name: "Cheese Slices", stock: 30 },
  ]);
  const [orders, setOrders] = useState([
    { id: 101, item: "Burger Bun", status: "Pending" },
    { id: 102, item: "Cheese Slices", status: "Shipped" },
  ]);
  const [vendors] = useState([
    { id: 1, name: "Street Food Hub", location: "T. Nagar" },
    { id: 2, name: "Quick Bites", location: "Anna Nagar" },
  ]);
  const salesAnalytics = {
    totalSales: 1200,
    bestSelling: "Burger Bun",
    dailyOrders: 40,
  };

  const updateOrderStatus = (id, status) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>📊 Seller Dashboard</div>
        <div style={styles.authButtons}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={styles.authBtn}>Login</button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button style={{ ...styles.authBtn, backgroundColor: '#4CAF50' }}>Register</button>
          </Link>
        </div>
      </nav>

      <header style={styles.header}>
        <h1>Welcome Seller! 🛍️</h1>
        <p>Manage your products, orders, vendors and sales data.</p>
      </header>

      {/* Product Management */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📦 Products</h2>
        <div style={styles.grid}>
          {products.map(product => (
            <div key={product.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.detail}>Stock: {product.stock}</p>
              <button style={styles.button}>Set Daily Stock</button>
            </div>
          ))}
        </div>
      </section>

      {/* Orders */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Orders</h2>
        <div style={styles.grid}>
          {orders.map(order => (
            <div key={order.id} style={styles.card}>
              <h3 style={styles.cardTitle}>#{order.id} - {order.item}</h3>
              <p style={styles.detail}>Status: {order.status}</p>
              <select
                value={order.status}
                onChange={e => updateOrderStatus(order.id, e.target.value)}
                style={styles.select}
              >
                <option>Pending</option>
                <option>Packed</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📈 Analytics</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <p>Total Sales: ₹{salesAnalytics.totalSales}</p>
            <p>Best Selling: {salesAnalytics.bestSelling}</p>
            <p>Daily Orders: {salesAnalytics.dailyOrders}</p>
          </div>
        </div>
      </section>

      {/* Vendors */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🏪 Nearby Vendors</h2>
        <div style={styles.grid}>
          {vendors.map(v => (
            <div key={v.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{v.name}</h3>
              <p style={styles.detail}>{v.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f4f6f8",
    color: "#333",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#1f2937",
    color: "white",
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  authButtons: {
    display: "flex",
    gap: "10px",
  },
  authBtn: {
    backgroundColor: "#3b82f6",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px 20px",
    background: "linear-gradient(to right, #e0f2fe, #f8fafc)",
  },
  section: {
    padding: "30px 20px",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "25px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    width: "220px",
    padding: "18px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#555",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  select: {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default SellerPage;
