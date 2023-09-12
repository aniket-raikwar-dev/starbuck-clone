import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  bigCarouselData,
  boxCardData,
  baristaItem,
} from "../data/homePageData";
import VegIcon from "../images/veg-icon.png";
import NonVegIcon from "../images/non-veg-48.png";
import Footer from "../components/Footer";

const topMenuItem = [
  {
    id: 1,
    name: "Bestseller",
    img: "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg",
    isHovered: false,
  },
  {
    id: 2,
    name: "Drinks",
    img: "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg",
    isHovered: false,
  },
  {
    id: 3,
    name: "Food",
    img: "	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg",
    isHovered: false,
  },
  {
    id: 4,
    name: "Merchandise",
    img: "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg",
    isHovered: false,
  },
  {
    id: 5,
    name: "Coffee At Home",
    img: "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg",
    isHovered: false,
  },
  {
    id: 6,
    name: "Ready to Eat",
    img: "	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg",
    isHovered: false,
  },
];

const Home = () => {
  const [topItems, setTopItems] = useState(topMenuItem);


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

  const handleMouseEnter = (id) => {
    const updatedMenuItem = topItems.map((item) => {
      if (item.id === id) item.isHovered = true;
      else item.isHovered = false;
      return item;
    });
    setTopItems(updatedMenuItem);
  };

  const handleMouseLeave = () => {
    const updatedMenuItem = topItems.map((item) => {
      item.isHovered = false;
      return item;
    });
    setTopItems(updatedMenuItem);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const boxyResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home-container">
      <div className="top-green-box">
        <p id="nav-text">Avail benefits! Sign up for My Starbucks Rewards.</p>
        <div className="know-more-div">
          <p>Know More</p>
        </div>
      </div>
      <div className="top-category">
        <h2 className="handcrafted-txt">Handcrafted Curations</h2>
        <div className="home-rounded-div">
          {topItems.map((item) => (
            <div
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className={
                  item.isHovered ? "menu-hovered" : "home-rounded-menu"
                }
              >
                <img className="top-menu-img" src={item.img} alt="img" />
              </div>
              <p className="top-menu-txt">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="one-carousel-container">
        <Carousel
          className="carousel-div"
          responsive={responsive}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {bigCarouselData.map((item) => (
            <div
              key={item.id}
              className="carousel-item"
              style={{ background: item.backgroundColor }}
            >
              <img className="big-car-img" src={item.src} alt="img" />
              <div className="carousel-content">
                <p className="small-head">{item.topSmallHeading}</p>
                <h3 className="big-head">{item.topBigHeading}</h3>
                <p className="para">{item.para}</p>
                <div className="combine-price-btn">
                  <div>
                    <h4 className="startingFrom-text">Starting From</h4>
                    <h3 className="price">₹ {item.price}</h3>
                  </div>
                  <div className="order-now-btn">Order Now</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="latest-offering-container">
        <h2 className="handcrafted-txt">Latest Offerings</h2>
        <div className="three-carousel-container">
          <Carousel
            className="carousel-div"
            responsive={boxyResponsive}
            keyBoardControl={true}
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            containerClass="carousel-container"
          >
            {boxCardData.map((item) => (
              <div key={item.id} className="boxy-card">
                <div className="boxy-card-img">
                  <img className="boxy-img" src={item.img} alt="img" />
                </div>
                <div className="boxy-card-content">
                  <div className="flex">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={VegIcon}
                      alt="veg"
                    />
                    <div className="new-launch-div">New Launch</div>
                  </div>
                  <h3 className="box-head-1">{item.head1}</h3>
                  <p className="box-head-2">{item.head2}</p>
                  <h3 className="box-head-3">{item.head3}</h3>
                  <div className="boxy-btn-container">
                    <p className="boxy-price">₹ {item.price}</p>
                    <div className="btn-add-item">Add Item</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="barista-div">
        <div className="flex justify-between">
          <h2 className="handcrafted-txt">Barista Recommends</h2>
          <p className="view-menu-txt">View Menu</p>
        </div>
        <div className="barista-container">
          <Carousel
            className="carousel-div"
            responsive={boxyResponsive}
            keyBoardControl={true}
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            containerClass="carousel-container"
          >
            {baristaItem.map((item) => (
              <div key={item.id} className="barista-item">
                <div className="flex">
                  <div className="barista-img-div">
                    <img
                      className="barista-img"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="ml-4">
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={item.isVeg ? VegIcon : NonVegIcon}
                      alt="veg"
                    />
                    <h3 className="box-head-1">{item.name}</h3>
                    <p className="box-head-2">{item.description}</p>
                  </div>
                </div>
                <div
                  style={{ marginTop: "15px" }}
                  className="boxy-btn-container"
                >
                  <p className="boxy-price">₹ {item.price}</p>
                  <div className="btn-add-item">Add Item</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="below-barista-div">
        <div className="flex justify-between">
          <h2 className="handcrafted-txt">
            Learn more about the world of coffee!
          </h2>
          <p className="view-menu-txt discover-more">Discover More</p>
        </div>
        <div className="coffee-bg-img">
          <div className="coffee-culture">Coffee Culture</div>
          <div className="mb-5">
            <h3 className="coffee-head">
              Coffee – Origin Story : Mystic, Intriguing And Aromatic{" "}
            </h3>
            <p className="coffee-para">
              {" "}
              Many centuries ago, somewhere between 800-900 AD the story of
              coffee first took roots in Ethiopia.
            </p>
            <div className="learn-more-btn">Learn More</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
