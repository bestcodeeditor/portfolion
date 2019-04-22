import React from "react";
import "./hero.css";
import { Link } from "gatsby";

const Hero = props => (
  <div className="hero">
    <div className="hero__background-image">
      <img
        src={props.img}
        width="4831"
        height="3221"
        alt=""
        typeof="foaf:Image"
      />
    </div>
    <div className="hero__text-wrapper">
      <h2 style={{ fontSize: "3rem", margin: 0 }}>{props.header}</h2>
      <div
        className="hero__body"
        style={{
          fontSize: "1.5rem",
          margin: "0 auto 10px",
          boxSizing: "border-box"
        }}
      >
        <p className="orange-text">
          Hi I am Sudip Lahiri a fullstack engineer
          <span className="hero__body--break">
            I love coding and contineous research & development{" "}
          </span>
          <span className="hero__body--break">
            <strong>Lets Work together</strong>
          </span>
        </p>
      </div>
      <div className="hero__cta">
        <Link to="#contact">Get in touch</Link>
      </div>
    </div>
    <div className="card-body bg-dark shadow-lg mt-3">
      <h5 className="card-heading">My skill box contains </h5>
      <h2 className="card-color">
        Javascript, HTML5, CSS3, ReactJS,Redux, NodeJS, GraphQl, GatsbyJS,
        Bootstrap, DB(Mongodb, sql), Git, Webpack, Ionic, AngularJS, Rails6,
        Django
      </h2>
    </div>
  </div>
);

export default Hero;
