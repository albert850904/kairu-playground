import React from "react";
import PropTypes from "prop-types";
// css
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

import Banner3d from "../../components/Banner/Banner3d";

function Home(props) {
  return (
    <main className="index">
      {/* <Banner /> */}
      <Banner3d />
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
