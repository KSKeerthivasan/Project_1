import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: '350px',
      margin: '80px auto',
      padding: '25px',
      background: '#f7f7f7',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial'
    },
    label: {
      marginTop: '15px',
      fontWeight: 'bold',
      display: 'block'
    },
    input: {
      marginTop: '5px',
      padding: '8px',
      fontSize: '1rem',
      width: '100%'
    },
    button: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#2d89ef',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      width: '100%'
    },
    link: {
      color: '#2d89ef',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in!');
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label style={styles.label}>Email ID</label>
        <input type="email" required style={styles.input} />

        <label style={styles.label}>Password</label>
        <input type="password" required style={styles.input} />

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Don't have an account?{' '}
        <span style={styles.link} onClick={() => navigate('/register')}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
