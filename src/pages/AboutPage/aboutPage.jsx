import React, { Fragment } from "react";

import AboutHero from "../../Component/AboutComponents/AboutHero";
import History from "../../Component/AboutComponents/History";
import Team from "../../Component/AboutComponents/OurTeam";
import Tech from "../../Component/AboutComponents/Tech";

const AboutPage = () => (
  <Fragment>
    <AboutHero />
    <Tech />
    <History />
    <Team />
  </Fragment>
);
export default AboutPage;
