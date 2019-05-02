import React from "react";
import styled from "styled-components";
import Portfolio from "./portfolio";

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="jumbotron jumbotron-fluid">
          <div className="container ">
            <div className="section-title mt-4">
              <h1 className="display-5 ">My Portfolio</h1>
              <span className="animate-border ml-auto mr-auto" />
            </div>
            <blockquote className="blockquote">
              <h5 className="card-text text-black  ">
                I am an enthusiastic full stack engineer developer , I love
                exploring new web technologies during development and always
                focus on emerging the edge in the fast-moving industry. Have a
                glance in
                {"e "}
                <a href="#projects">Latest Work</a>.
              </h5>
              <h5 className="card-text text-black">
                If you are looking for an application with fast emerging
                technologies then you are at the right place.
                <a href="#contact">Get in touch</a>
              </h5>
            </blockquote>
          </div>
        </div>
      </div>
      {/* <div className="col-10-12">
        <div className="card-body bg-dark shadow-lg mt-3  ">
          <h5 className="card-heading">My skill box contains: </h5>
          <h4 className="card-color">
            Javascript, HTML5, CSS3, ReactJS,Redux, NodeJS, GraphQl, GatsbyJS,
            Bootstrap, DB(Mongodb, sql), Git, Webpack, Ionic, AngularJS, Rails6,
            Django
          </h4>
        </div>
      </div> */}

      <Portfolio />
    </section>
  );
}

// const AboutWrapper = styled.div`
//   @media (min-width: 576px) {
//     display: block;
//   }
// `;

export default About;
