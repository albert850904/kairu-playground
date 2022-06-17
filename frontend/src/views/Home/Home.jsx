import React from "react";
import PropTypes from "prop-types";
// css
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
// image
import interlaken from "../../assets/images/interlaken.jpeg";
import moose from "../../assets/images/moose.png";
import moose2 from "../../assets/images/moose2.png";

function Home(props) {
  return (
    <main className="index">
      <section className="index-banner">
        {/* <Banner /> */}
        <img src={interlaken} alt="" className="background" />
        <img src={moose} alt="" className="foreground" />
        <img src={moose2} alt="" className="foreground2" />
        <h1>Welcome</h1>
      </section>
      <div className="index-contents">
        <section className="index-contents-boxlink">
          <a href="/">
            <div className="index-contents-boxlink-square">
              <h3>Cases</h3>
            </div>
          </a>
          <a href="/">
            <div className="index-contents-boxlink-rect">
              <h3>Kairu Portfolio</h3>
            </div>
          </a>
          <a href="/">
            <div className="index-contents-boxlink-square">
              <h3>Games</h3>
            </div>
          </a>
          <a href="/">
            <div className="index-contents-boxlink-rect">
              <h3>Wherer Are My Friends</h3>
            </div>
          </a>
          <a href="/">
            <div className="index-contents-boxlink-square">
              <h3>About</h3>
            </div>
          </a>
          <a href="/">
            <div className="index-contents-boxlink-square">
              <h3>Contact</h3>
            </div>
          </a>
        </section>
      </div>
      <Footer />
    </main>
  );
}

Home.propTypes = {};

export default Home;
