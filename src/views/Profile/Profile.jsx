import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Header from "./ProfileComponents/Header";
import Footer from "./ProfileComponents/Footer";
import About from "./ProfileComponents/About";
import Resume from "./ProfileComponents/Resume";
import Contact from "./ProfileComponents/Contact";
import Testimonials from "./ProfileComponents/Testimonials";
import Portfolio from "./ProfileComponents/Portfolio";

function Profile(props) {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
