import React, { Fragment } from "react";

import AboutHero from "../../Component/AboutComponents/AboutHero";
import History from "../../Component/AboutComponents/History";

import Tech from "../../Component/AboutComponents/Tech";

const AboutPage = () => (
  <Fragment>
    <AboutHero />
    <History />
    <Tech />
  </Fragment>
);
export default AboutPage;
