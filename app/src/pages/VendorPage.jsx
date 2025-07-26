import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const rawMaterialsData = [
  {
    id: 1,
    name: "Red Onions",
    image: "/images/Onion-Red.webp",
    price: "₹25/kg",
    quantity: 30,
  },
  {
    id: 2,
    name: "Ripe Tomatoes",
    image: "/images/ripetomato.jpg",
    price: "₹20/kg",
    quantity: 50,
  },
  {
    id: 3,
    name: "Potatoes",
    image: "/images/potato.jpg",
    price: "₹18/kg",
    quantity: 40,
  },
  {
    id: 4,
    name: "Sunflower Oil",
    image: "/images/sunflower.webp",
    price: "₹120/litre",
    quantity: 20,
  },
  {
    id: 5,
    name: "Chili Powder",
    image: "/images/rcp.webp",
    price: "₹45/100g",
    quantity: 10,
  },
  {
    id: 6,
    name: "Turmeric Powder",
    image: "/images/turmeric powder.jpg",
    price: "₹40/100g",
    quantity: 15,
  },
  {
    id: 7,
    name: "Green Peas",
    image: "/images/green peas.jpg",
    price: "₹30/kg",
    quantity: 20,
  },
  {
    id: 8,
    name: "Coriander Leaves",
    image: "/images/coriander leaves.webp",
    price: "₹10/bunch",
    quantity: 50,
  },
  {
    id: 9,
    name: "Garlic",
    image: "/images/ginger.webp",
    price: "₹60/kg",
    quantity: 25,
  },
  {
    id: 10,
    name: "Ginger",
    image: "/images/ginger.jpg",
    price: "₹70/kg",
    quantity: 15,
  },
];

function VendorPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMaterials = rawMaterialsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalQuantity = filteredMaterials.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>🛒 Vendor Dashboard</div>
        <div style={styles.authButtons}>
  <Link to="/login" style={{ textDecoration: 'none' }}>
    <button style={styles.authBtn}>Login</button>
  </Link>
  <Link to="/register" style={{ textDecoration: 'none' }}>
    <button style={{ ...styles.authBtn, backgroundColor: '#4CAF50' }}>Register</button>
  </Link>
</div>

      </nav>

      {/* HEADER */}
      <header style={styles.header}>
        <h1>Welcome Back, Vendor! 👋</h1>
        <p>Manage your stock, track inventory, and operate efficiently.</p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <p style={styles.stockInfo}><strong>Total Stock:</strong> {totalQuantity} units</p>
      </header>

      {/* PRODUCT LIST */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📦 Product Inventory</h2>
        <div style={styles.grid}>
          {filteredMaterials.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <h3 style={styles.cardTitle}>{item.name}</h3>
              <p style={styles.detail}><strong>Price:</strong> {item.price}</p>
              <p style={styles.detail}><strong>Stock:</strong> {item.quantity}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#f4f6f9",
    minHeight: "100vh",
    color: "#333",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  authButtons: {
    display: "flex",
    gap: "10px",
  },
  authBtn: {
    backgroundColor: "#3b82f6",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
  header: {
    padding: "40px 20px 20px",
    textAlign: "center",
    background: "linear-gradient(to right, #e0f2fe, #f8fafc)",
  },
  searchInput: {
    marginTop: "20px",
    padding: "10px 15px",
    fontSize: "1rem",
    width: "260px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  },
  stockInfo: {
    marginTop: "15px",
    fontSize: "1.1rem",
    color: "#444",
  },
  section: {
    padding: "30px 20px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "25px",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    borderRadius: "12px",
    padding: "15px",
    width: "200px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
    border: "1px solid #e0e0e0",
  },
  cardTitle: {
    marginTop: "12px",
    fontSize: "1.15rem",
    fontWeight: "600",
    color: "#222",
  },
  detail: {
    fontSize: "0.95rem",
    color: "#555",
    margin: "4px 0",
  },
  image: {
    width: "100%",
    height: "130px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "transform 0.3s, filter 0.3s",
  },
};

// Add hover effect dynamically with inline styles via JS or use CSS
styles.card[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
};

export default VendorPage;
