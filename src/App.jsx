import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Player from "./pages/Player/Player";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer 
        theme="dark"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Public routes - accessible only when NOT logged in */}
        <Route 
          path="/login" 
          element={!user ? <Login /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/signup" 
          element={!user ? <Signup /> : <Navigate to="/" replace />} 
        />

        {/* Protected routes - accessible only when logged in */}
        <Route 
          path="/" 
          element={user ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/player/:id" 
          element={user ? <Player /> : <Navigate to="/login" replace />} 
        />
        
        {/* Redirect any unknown route to login or home based on auth status */}
        <Route 
          path="*" 
          element={<Navigate to={user ? "/" : "/login"} replace />} 
        />
      </Routes>
    </>
  );
};

export default App;