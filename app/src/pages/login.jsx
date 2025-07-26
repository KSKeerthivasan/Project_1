import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '100px auto',
      padding: '40px',
      background: 'linear-gradient(135deg, #ffffff, #f0f4f8)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    },
    title: {
      marginBottom: '25px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#2d89ef'
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
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    button: {
      marginTop: '30px',
      padding: '12px',
      backgroundColor: '#2d89ef',
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
    buttonHover: {
      backgroundColor: '#1e63c2'
    },
    link: {
      color: '#2d89ef',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    info: {
      marginTop: '20px',
      fontSize: '0.95rem',
      color: '#555'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome Back 👋</h2>
      <form onSubmit={handleLogin}>
        <label style={styles.label}>Email Address</label>
        <input type="email" required style={styles.input} placeholder="example@email.com" />

        <label style={styles.label}>Password</label>
        <input type="password" required style={styles.input} placeholder="Enter your password" />

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={styles.info}>
        Don't have an account?{' '}
        <span style={styles.link} onClick={() => navigate('/register')}>
          Register Here
        </span>
      </p>

    </div>
  );
}

export default Login;