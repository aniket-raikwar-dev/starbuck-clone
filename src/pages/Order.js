import React, { useState, useEffect } from "react";
import ShowRoutesName from "../components/ShowRoutesName";
import LocationIcon from "../images/icons8-location-30.png";
import ClockIcon from "../images/icons8-clock-48.png";
import {
  orderSlug,
  merchandiseItems,
  drinksItems,
  bestSellerItems,
  readyToEatItems,
} from "../data/orderData";
import VegIcon from "../images/veg-icon.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const orderTypeCollection = [
  { id: 1, name: "Bestseller", is_selected: true },
  { id: 12, name: "line", is_selected: false },
  { id: 2, name: "Merchandise", is_selected: false },
  { id: 13, name: "line", is_selected: false },
  { id: 3, name: "Drinks", is_selected: false },
  { id: 14, name: "line", is_selected: false },
  { id: 4, name: "Ready to Eat", is_selected: false },
];

const Order = () => {
  const [orderTypes, setOrderTypes] = useState(orderTypeCollection);
  const [orderSelectedSlug, setOrderSelectedSlug] = useState(orderSlug);
  const [showSelectedOrderItem, setShowSelectedOrderItem] =
    useState(bestSellerItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectOrderType = (orderId, orderSlug) => {
    const updatedOrderTypes = orderTypes.map((order) => ({
      ...order,
      is_selected: order.id === orderId,
    }));
    const updatedOrderSlug = orderSelectedSlug.map((order) => ({
      ...order,
      is_selected: order.slug === orderSlug,
    }));
    if (orderSlug === "Merchandise") {
      setShowSelectedOrderItem(merchandiseItems);
    } else if (orderSlug === "Bestseller") {
      setShowSelectedOrderItem(bestSellerItems);
    } else if (orderSlug === "Drinks") {
      setShowSelectedOrderItem(drinksItems);
    } else {
      setShowSelectedOrderItem(readyToEatItems);
    }
    setOrderTypes(updatedOrderTypes);
    setOrderSelectedSlug(updatedOrderSlug);
  };

  return (
    <div className="home-container">
      <ShowRoutesName routeName={"Order"} />
      <Link to="/store">
        <div className="order-green-box">
          <img style={{ width: "18px" }} src={LocationIcon} alt="location" />
          <input
            className="location-search-bar"
            type="text"
            placeholder="No Store Selected"
          />
          <img style={{ width: "18px" }} src={ClockIcon} alt="clock" />
          <p className="min-text">00 mins</p>
        </div>
      </Link>
      <div>
        <div className="card-type-container">
          {orderTypes.map((order) =>
            order.name === "line" ? (
              <div className="small-line"></div>
            ) : (
              <div
                key={order.id}
                onClick={() => selectOrderType(order.id, order.name)}
                className={
                  order.is_selected
                    ? "card-type-text-selected"
                    : "card-type-text"
                }
              >
                {order.name}
              </div>
            )
          )}
        </div>
        <div>
          {orderSelectedSlug.map(
            (item) =>
              item.is_selected && (
                <div className="order-selected-div">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
          )}
        </div>
        <div className="gift-card-container">
          {showSelectedOrderItem.map((item) => (
            <div key={item.id} className="order-card-box">
              <div className="rounded-img-box">
                <img className="rounded-order-img" src={item.img} alt="" />
              </div>
              <div className="boxy-card-content order-content">
                <div className="flex">
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={VegIcon}
                    alt="veg"
                  />
                  <div className="new-launch-div">New Launch</div>
                </div>
                <h3 className="box-head-1">{item.title}</h3>
                <p className="box-head-2">{item.tagline}</p>
                <h3 className="box-head-3">{item.description}</h3>
                <div className="boxy-btn-container">
                  <p className="boxy-price">₹ {item.price}</p>
                  <div className="btn-add-item">Add Item</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
