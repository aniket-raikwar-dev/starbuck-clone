import React from "react";
import SearchIcon from "../images/search-line.svg";
import ShowRoutesName from "../components/ShowRoutesName";
import Map from "../images/map.png";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <div className="home-container">
      <ShowRoutesName routeName={"Store"} />
      <div className="store-container">
        <div className="store-box">
          <div className="store-search-box">
            <div className="store-search-div">
              <div className="store-search-bar-container">
                <img style={{ width: "18px" }} src={SearchIcon} alt="search" />
                <input
                  className="store-search-input"
                  type="text"
                  placeholder="Find a store near you"
                />
              </div>
            </div>
            <div>
              <img
                className="map-img"
                src={"https://www.starbucks.in/assets/images/gpsOff.svg"}
                alt=""
              />
            </div>
            <div className="location-content">
              <h3>Sorry! we can't seem to spot you.</h3>
              <p>Please enable your location to find the nearest Starbucks</p>
              <div className="btn-location">Enter Location Manually</div>
            </div>
          </div>
          <div className="store-map-box">
            <img className="full-map-img" src={Map} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
