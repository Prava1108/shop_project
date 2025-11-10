import React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    // Redirect to backend OAuth2 login endpoint
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Simple Shop App</h1>
      <button style={styles.button} onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "2rem",
    color: "#333",
  },
  button: {
    padding: "1rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginPage;
