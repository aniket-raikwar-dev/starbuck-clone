import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navList = [
  {
    id: 1,
    name: "Home",
    active: true,
    activeImg: "https://www.starbucks.in/assets/icon/home.svg",
    inactiveImg: "https://www.starbucks.in/assets/icon/home_inactive.svg",
    link: "/",
  },
  {
    id: 2,
    name: "Gift",
    active: false,
    activeImg: "https://www.starbucks.in/assets/icon/Gift_Active.svg",
    inactiveImg: "https://www.starbucks.in/assets/icon/gift_Inactive.svg",
    link: "/gift",
  },
  {
    id: 3,
    name: "Order",
    active: false,
    activeImg: "",
    inactiveImg: "",
    link: "/order",
  },
  {
    id: 4,
    name: "Pay",
    active: false,
    activeImg: "https://www.starbucks.in/assets/icon/pay-filled.svg",
    inactiveImg: "https://www.starbucks.in/assets/icon/pay-filled.svg",
    link: "/pay",
  },
  {
    id: 5,
    name: "Search",
    active: false,
    activeImg: "https://www.starbucks.in/assets/icon/Serach_Active.svg",
    inactiveImg: "https://www.starbucks.in/assets/icon/Mask.svg",
    link: "/store",
  },
];

const BottomNavbar = () => {
  const [navItem, setNavItem] = useState(navList);
  let location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    const updatedStatus = navItem.map((item) => {
      if (item.link === path) item.active = true;
      else item.active = false;
      return item;
    });
    setNavItem(updatedStatus);
  }, [location]);

  const selectNavItem = (id) => {
    const updatedStatus = navItem.map((item) => {
      if (item.id === id) item.active = true;
      else item.active = false;
      return item;
    });
    setNavItem(updatedStatus);
  };

  return (
    <div className="bottom-navbar">
      <div className="starbuck-round-btn">
        <div className="green-btn">
          <Link to="/order">
            <img
              style={{ width: "100%" }}
              src="https://tsb-sit.reciproci.com/assets/icon/Group%20710.svg"
            />
          </Link>
        </div>
      </div>
      <div className="bottom-navbar-container">
        {navItem.map((item) => (
          <div
            className="flex flex-col items-center"
            key={item.id}
            onClick={() => selectNavItem(item.id)}
          >
            <Link to={item.link}>
              {item.activeImg.length !== 0 && (
                <img
                  className="bottom-icon"
                  src={item.active ? item.activeImg : item.inactiveImg}
                  alt={item.name}
                />
              )}
              {item.name === "Order" ? (
                <p style={{ marginTop: "23px" }} className="btm-nav-text">
                  {item.name}
                </p>
              ) : (
                <p className="btm-nav-text">{item.name}</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
