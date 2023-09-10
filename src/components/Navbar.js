import React, { useState, useRef, useEffect } from "react";
import StarBuckLogo from "../images/Starbucks_logo.png";
import UserProfile from "../images/user-line.svg";
import SearchIcon from "../images/search-line.svg";
import "../fonts/FreightSansProLightRegular.ttf";
import "../fonts/FreightSansProBookRegular.ttf";
import BottomNavbar from "./BottomNavbar";
import { Link, useLocation } from "react-router-dom";

const navItemsArray = [
  { id: 1, title: "Home", isSelected: true, link: "/" },
  { id: 2, title: "Gift", isSelected: false, link: "/gift" },
  { id: 3, title: "Order", isSelected: false, link: "/order" },
  { id: 4, title: "Pay", isSelected: false, link: "/pay" },
  { id: 5, title: "Store", isSelected: false, link: "/store" },
];

const Navbar = () => {
  const [navItem, setNavItem] = useState(navItemsArray);
  let location = useLocation();
  
  useEffect(() => {
    let path = location.pathname;
    const updatedNavItems = navItem.map((item) => {
      if (path === item.link) item.isSelected = true;
      else item.isSelected = false;
      return item;
    });
    setNavItem(updatedNavItems);
  }, [location]);

  const selectNavItem = (id) => {
    const updatedNavItems = navItem.map((item) => {
      if (id === item.id) item.isSelected = true;
      else item.isSelected = false;
      return item;
    });
    setNavItem(updatedNavItems);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container-left">
          <img className="nav-logo" src={StarBuckLogo} alt="logo" />
          <div className="nav-item-container">
            {navItem.map((item) => (
              <div
                key={item.id}
                onClick={() => selectNavItem(item.id)}
                className={item.isSelected ? "nav-item-bold" : "nav-item"}
              >
                {" "}
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-container-right">
          <div className="search-bar-container">
            <img style={{ width: "15px" }} src={SearchIcon} alt="search" />
            <input
              className="search-input"
              type="text"
              placeholder="Looking for something specific?"
            />
          </div>
          <div className="profile-pic">
            <img style={{ width: "20px" }} src={UserProfile} alt="profile" />
          </div>
        </div>
      </nav>
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
