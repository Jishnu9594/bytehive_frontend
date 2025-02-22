import React, { Fragment } from "react";
import CustomNavbar from "./navbar";
import HeroSection from "./home";
import AboutUs from "./ourstory";
import ServiceSection from "./service";

function Index() {
  return (
    <Fragment>
      <>
        <CustomNavbar />
        <HeroSection />
        <AboutUs />
        <ServiceSection />
      </>
    </Fragment>
  );
}

export default Index;
