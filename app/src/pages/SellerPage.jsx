import React, { useState } from "react";

function SellerPage() {
  const [products, setProducts] = useState([
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
    <div style={styles.container}>
      <h1 style={styles.header}>👨‍💼 Seller Dashboard</h1>
      <p style={styles.subtext}>
        Welcome, Seller! Manage your products, orders, and check analytics here.
      </p>

      {/* Product Management */}
      <div style={styles.card}>
        <h2>📦 Product Management</h2>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>Add Product</button>
          <button style={styles.button}>Edit Product</button>
          <button style={styles.button}>Delete Product</button>
          <button style={styles.button}>Bulk Upload CSV</button>
        </div>
        <ul>
          {products.map(product => (
            <li key={product.id} style={styles.listItem}>
              {product.name} - Stock: {product.stock}
              <button style={{ ...styles.button, marginLeft: "10px" }}>
                Set Daily Stock
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Dashboard */}
      <div style={styles.card}>
        <h2>📋 Order Dashboard</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id} style={styles.listItem}>
              Order #{order.id} - {order.item} - Status: {order.status}
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
            </li>
          ))}
        </ul>
      </div>

      {/* Analytics */}
      <div style={styles.card}>
        <h2>📊 Analytics</h2>
        <p>Total Sales: ₹{salesAnalytics.totalSales}</p>
        <p>Best Selling Product: {salesAnalytics.bestSelling}</p>
        <p>Average Daily Orders: {salesAnalytics.dailyOrders}</p>
      </div>

      {/* Nearby Vendors */}
      <div style={styles.card}>
        <h2>🧑‍🍳 Nearby Vendors</h2>
        <ul>
          {vendors.map(v => (
            <li key={v.id} style={styles.listItem}>
              {v.name} - {v.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f4f6f8",
  },
  header: {
    fontSize: "2.5em",
    marginBottom: "10px",
    color: "#333",
  },
  subtext: {
    fontSize: "1.1em",
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    marginTop: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  buttonGroup: {
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 14px",
    marginRight: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  listItem: {
    margin: "8px 0",
    padding: "6px 0",
    borderBottom: "1px solid #eee",
  },
  select: {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#fafafa",
    cursor: "pointer",
  },
};

// Add hover effect to buttons using JS-in-CSS approach (inline doesn't support :hover well).
// If you want real hover interaction, consider moving to a separate CSS file or styled-components.

export default SellerPage;
