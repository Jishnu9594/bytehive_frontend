import React, { Fragment } from "react";
import CustomNavbar from "./navbar";
import HeroSection from "./home";
import AboutUs from "./ourstory";

function Index() {
  return (
    <Fragment>
      <>
        <CustomNavbar />
        <HeroSection />
        <AboutUs />
      </>
    </Fragment>
  );
}

export default Index;
