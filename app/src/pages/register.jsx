import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dob: '',
    email: '',
    address: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registered successfully!");
        navigate("/login");
      } else {
        alert(`❌ Registration failed: ${data.message}`);
      }

    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    container: {
      maxWidth: '450px',
      margin: '60px auto',
      padding: '40px',
      background: 'linear-gradient(135deg, #ffffff, #f3f6fa)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    },
    title: {
      marginBottom: '25px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#28a745'
    },
    label: {
      marginTop: '20px',
      fontWeight: 'bold',
      display: 'block',
      textAlign: 'left',
      color: '#333'
    },
    input: {
      marginTop: '8px',
      padding: '10px',
      fontSize: '1rem',
      width: '100%',
      borderRadius: '6px',
      border: '1px solid #ccc',
      outline: 'none'
    },
    textarea: {
      marginTop: '8px',
      padding: '10px',
      fontSize: '1rem',
      width: '100%',
      resize: 'none',
      borderRadius: '6px',
      border: '1px solid #ccc'
    },
    select: {
      marginTop: '8px',
      padding: '10px',
      fontSize: '1rem',
      width: '100%',
      borderRadius: '6px',
      border: '1px solid #ccc'
    },
    button: {
      marginTop: '30px',
      padding: '12px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%',
      fontWeight: 'bold',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease'
    },
    info: {
      marginTop: '20px',
      fontSize: '0.95rem',
      color: '#555'
    },
    link: {
      color: '#28a745',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Your Account 📝</h2>
      <form onSubmit={handleRegister}>
        <label style={styles.label}>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={styles.input} placeholder="Enter your full name" />

        <label style={styles.label}>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={styles.input} placeholder="Enter phone number" />

        <label style={styles.label}>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} placeholder="example@email.com" />

        <label style={styles.label}>Address</label>
        <textarea rows="3" name="address" value={formData.address} onChange={handleChange} required style={styles.textarea} placeholder="Enter your address"></textarea>

        <label style={styles.label}>Registering as</label>
        <select name="role" value={formData.role} onChange={handleChange} required style={styles.select}>
          <option value="">Select</option>
          <option value="vendor">Street Vendor</option>
          <option value="seller">Seller</option>
        </select>

        <button type="submit" style={styles.button}>Submit</button>
      </form>

      <p style={styles.info}>
        Already have an account?{' '}
        <span style={styles.link} onClick={() => navigate('/login')}>
          Login Here
        </span>
      </p>
    </div>
  );
}

export default Register;
