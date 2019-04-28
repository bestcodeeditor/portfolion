import React from "react";
import Helmet from "react-helmet";

import Header from "../components/header";
import Projects from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/footer";
import About from "../components/about";
import Banner from "../components/banner1";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Hero from "../components/banner2";
import cover from "../static/images/cover.jpg";
import Navbar from "../components/globals/Navbar";

import { siteTitle, siteDescription, siteUrl } from "../../site-config";

import favicon32 from "../static/images/sudip.png";
import favicon16 from "../static/images/sudip.png";
import ogImage from "../static/images/sudip.png";

export default () => {
  return (
    <React.Fragment>
      <Helmet
        title={siteTitle}
        meta={[
          { name: "description", content: siteDescription },
          { property: "og:url", content: siteUrl },
          {
            property: "og:image",
            content: "https://www.mojaave.com" + ogImage
          },
          { property: "og:title", content: siteTitle },
          { property: "og:type", content: "website" },
          { property: "og:description", content: siteDescription }
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
          { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
          { rel: "canonical", href: "https://www.mojaave.com" }
        ]}
      />
      <h1 hidden>
        full stack developer, react Developer, font end developer in usa, full
        stack developer in usa, javascript developer, software engineer, web
        developer, react developer, reactjs developer, node developer, nodejs
        developer, graphql developer, angular developer, typescript developer,
        front end developer.
        {siteDescription}
      </h1>
      <div className="container-fluid">
        <Navbar />
        <Hero header="Sudip Lahiri" img={cover} />

        <About />
        <Projects />
        <hr className="large-hr" />
        <Footer />
      </div>
      <h1 hidden>
        software enginer, ui developer, build website, full stack developer,
        freelancer in india, font end developer in india, full stack developer
        in india, javascript developer, software engineer, web developer, react
        developer, reactjs developer, node developer, nodejs developer, graphql
        developer, angular developer, typescript developer, front end developer.
      </h1>
    </React.Fragment>
  );
};
