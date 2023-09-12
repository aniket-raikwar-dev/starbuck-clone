import React, { useState, useEffect } from "react";
import ShowRoutesName from "../components/ShowRoutesName";
import Footer from "../components/Footer";
import {
  congratulationItems,
  featuredItems,
  anytimeItems,
  thankYouItems,
} from "../data/giftData";

const giftTypeCollection = [
  { id: 1, name: "Featured", is_selected: true },
  { id: 12, name: "line", is_selected: false },
  { id: 2, name: "Anytime", is_selected: false },
  { id: 13, name: "line", is_selected: false },
  { id: 3, name: "Congratulations", is_selected: false },
  { id: 14, name: "line", is_selected: false },
  { id: 4, name: "Thank You", is_selected: false },
];

const Gift = () => {
  const [giftTypes, setGiftTypes] = useState(giftTypeCollection);
  const [selectedGiftItems, setSelectedGiftItems] = useState(featuredItems);


  useEffect(() => {
    const scrollStep = -window.scrollY / (250 / 15); 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
    return () => clearInterval(scrollInterval);
  }, []);

  const selectGiftType = (giftId) => {
    const updatedGiftTypes = giftTypes.map((gift) => ({
      ...gift,
      is_selected: gift.id === giftId,
    }));
    if (giftId === 1) {
      setSelectedGiftItems(featuredItems);
    } else if (giftId === 2) {
      setSelectedGiftItems(anytimeItems);
    } else if (giftId === 3) {
      setSelectedGiftItems(congratulationItems);
    } else {
      setSelectedGiftItems(thankYouItems);
    }
    setGiftTypes(updatedGiftTypes);
  };

  return (
    <div className="home-container">
      <ShowRoutesName routeName={"Gift Cards"} />
      <div className="green-gift-box">
        <div className="carousel-item" style={{ background: "#E0C49D" }}>
          <img
            className="big-car-img"
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/banner_icon_1_feafe78e1b.png"
            alt="img"
          />
          <div className="carousel-content">
            <p className="small-head black">New Season, New Sips!</p>
            <h3 className="big-head black">Autumn Merchandise</h3>
            <p className="para black">
              {" "}
              Embrace the fall vibes as you sip in style with Autumn merchandise
              featuring super moon and bunny.{" "}
            </p>
            <div className="combine-price-btn">
              <div>
                <h4 className="startingFrom-text black">Starting From</h4>
                <h3 className="price black">₹ 650</h3>
              </div>
              <div className="order-now-btn gift-order-btn">Order Now</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card-type-container">
          {giftTypes.map((gift) =>
            gift.name === "line" ? (
              <div className="small-line"></div>
            ) : (
              <div
                key={gift.id}
                onClick={() => selectGiftType(gift.id)}
                className={
                  gift.is_selected
                    ? "card-type-text-selected"
                    : "card-type-text"
                }
              >
                {gift.name}
              </div>
            )
          )}
        </div>
        <div>
          {giftTypes.map(
            (gift) =>
              gift.is_selected && (
                <div className="gift-type-heading" key={gift.id}>
                  {gift.name}
                </div>
              )
          )}
        </div>
        <div className="gift-card-container">
          {selectedGiftItems.map((item) => (
            <div key={item.id} className="gift-card-box">
              <div className="gift-card-img">
                <img className="gift-img" src={item.img} alt="" />
              </div>
              <div className="gift-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="btn-add-card">Add Item</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gift;
