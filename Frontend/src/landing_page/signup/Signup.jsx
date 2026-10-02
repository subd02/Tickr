import { useState } from "react";
import axios from "axios";
import Antigravity from "./Antigravity";

function Signup() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isSignUp
      ? "http://localhost:3000/signup"
      : "http://localhost:3000/login";

    try {
      const res = await axios.post(endpoint, formData);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username || formData.username);

        window.location.href = `http://localhost:5174?token=${res.data.token}&username=${res.data.username || formData.username}`;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Light Background Antigravity Canvas */}
      <div style={styles.bgCanvasWrapper}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#2563eb"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Dark Blue Glassmorphic Card Container */}
      <div style={styles.cardContainer}>
        <div style={styles.cardContent}>
          {/* Mode Switcher Tabs */}
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tab,
                ...(isSignUp ? styles.activeTab : {}),
              }}
              onClick={() => {
                setIsSignUp(true);
                setError("");
              }}
              type="button"
            >
              Sign Up
            </button>
            <button
              style={{
                ...styles.tab,
                ...(!isSignUp ? styles.activeTab : {}),
              }}
              onClick={() => {
                setIsSignUp(false);
                setError("");
              }}
              type="button"
            >
              Log In
            </button>
          </div>

          <h2 style={styles.cardTitle}>
            {isSignUp ? "Open a Free Demat Account" : "Welcome Back"}
          </h2>
          <p style={styles.cardSubtitle}>
            {isSignUp
              ? "Join millions of traders tracking market data in real-time."
              : "Enter your credentials to access your dashboard."}
          </p>

          {error && <div style={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} style={styles.form}>
            {isSignUp && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="e.g. john_doe"
                  value={formData.username}
                  onChange={handleChange}
                  required={isSignUp}
                  style={styles.input}
                />
              </div>
            )}

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.submitButton,
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading
                ? "Processing..."
                : isSignUp
                ? "Create Account →"
                : "Log In to Dashboard →"}
            </button>
          </form>

          <p style={styles.footerText}>
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <span
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              style={styles.toggleLink}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc", // Light background
    color: "#0f172a",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "40px 20px",
    overflow: "hidden",
  },
  bgCanvasWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  },
  cardContainer: {
    position: "relative",
    zIndex: 1,
    maxWidth: "460px",
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.35)", // Dark drop shadow to contrast with light bg
    backgroundColor: "rgba(11, 19, 38, 0.92)", // Deep dark blue card theme
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    color: "#f8fafc",
  },
  cardContent: {
    padding: "36px",
  },
  tabContainer: {
    display: "flex",
    backgroundColor: "rgba(5, 10, 22, 0.7)",
    padding: "4px",
    borderRadius: "10px",
    marginBottom: "24px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },
  tab: {
    flex: 1,
    padding: "10px",
    border: "none",
    backgroundColor: "transparent",
    color: "#94a3b8",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  activeTab: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.4)",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "6px",
    color: "#ffffff",
  },
  cardSubtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#cbd5e1",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    backgroundColor: "rgba(5, 10, 22, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
  },
  submitButton: {
    marginTop: "8px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
  },
  errorMessage: {
    backgroundColor: "rgba(239, 68, 68, 0.15)",
    border: "1px solid rgba(239, 68, 68, 0.4)",
    color: "#f87171",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "16px",
  },
  footerText: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#94a3b8",
  },
  toggleLink: {
    color: "#60a5fa",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
  },
};

export default Signup;