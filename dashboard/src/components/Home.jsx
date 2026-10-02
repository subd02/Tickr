import {useEffect, useState} from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const usernameFromUrl = urlParams.get("username");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      if (usernameFromUrl) {
        localStorage.setItem("username", usernameFromUrl);
      }

      window.history.replaceState({}, document.title, window.location.pathname);
      setIsAuthenticated(true);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect back to Signup/Login if no token
      window.location.href = "http://localhost:5173/signup";
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <div style={{ padding: "20px" }}>Loading dashboard...</div>;
  }
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;