import React from "react";
import Portfolio from "./portfolio";

function About() {
  return (
    <section id="about">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="section-title">
            <h1 className="display-5">My Portfolio</h1>
            <span className="animate-border ml-auto mr-auto" />
          </div>
          <blockquote className="blockquote">
            <h5 className="card-text text-black">
              I am an enthusiastic full stack engineer developer , I love
              exploring new web technologies during development and always focus
              on emerging the edge in the fast-moving industry. Have a glance in
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
      <Portfolio />
    </section>
  );
}

export default About;
