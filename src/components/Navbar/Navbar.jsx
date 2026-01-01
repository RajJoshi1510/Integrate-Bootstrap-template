import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

import { logout, auth } from "../../firebase";

import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img
          src={logo}
          className="logo"
          alt="Netflix"
          onClick={() => navigate("/")}
        />

        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} className="nav-icon" alt="search" />

        <p onClick={() => navigate("/kids")} style={{ cursor: "pointer" }}>
          Kids
        </p>

        <img src={bell_icon} className="nav-icon" alt="bell" />

        <div className="profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <img src={profile_img} className="profile-img" alt="profile" />

          {showProfileMenu && (
            <div className="profile-menu">
              {user && (
                <div className="profile-menu-user">
                  {user.email}
                </div>
              )}

              <div className="profile-menu-item" onClick={() => navigate("/profile")}>
                Account
              </div>

              <div className="profile-menu-item" onClick={() => navigate("/help")}>
                Help Center
              </div>

              <div className="profile-menu-divider"></div>

              <div className="profile-menu-item logout" onClick={handleLogout}>
                Sign Out of Netflix
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
