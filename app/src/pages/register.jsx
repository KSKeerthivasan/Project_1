import React from 'react';

function Register() {
  const styles = {
    container: {
      width: '400px',
      margin: '50px auto',
      padding: '25px',
      background: '#f9f9f9',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial'
    },
    label: {
      marginTop: '12px',
      fontWeight: 'bold',
      display: 'block'
    },
    input: {
      marginTop: '5px',
      padding: '8px',
      fontSize: '1rem',
      width: '100%'
    },
    textarea: {
      marginTop: '5px',
      padding: '8px',
      fontSize: '1rem',
      width: '100%',
      resize: 'none'
    },
    select: {
      marginTop: '5px',
      padding: '8px',
      fontSize: '1rem',
      width: '100%'
    },
    button: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%'
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registered!');
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label style={styles.label}>Full Name</label>
        <input type="text" required style={styles.input} />

        <label style={styles.label}>Phone Number</label>
        <input type="tel" required style={styles.input} />

        <label style={styles.label}>Date of Birth</label>
        <input type="date" required style={styles.input} />

        <label style={styles.label}>Email ID</label>
        <input type="email" required style={styles.input} />

        <label style={styles.label}>Address</label>
        <textarea rows="3" required style={styles.textarea}></textarea>

        <label style={styles.label}>Registering as</label>
        <select required style={styles.select}>
          <option value="">Select</option>
          <option value="vendor">Street Vendor</option>
          <option value="seller">Seller</option>
        </select>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
