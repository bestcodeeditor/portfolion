import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query profileImage {
        file(relativePath: { eq: "sudip.png" }) {
          childImageSharp {
            sizes(maxWidth: 450, maxHeight: 450) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `}
    render={data => (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card hovercard">
              <div className="cardheader" />
              <div className="avatar">
                <Img
                  sizes={data.file.childImageSharp.sizes}
                  src={data.file.childImageSharp.sizes.src}
                  className="shadow-lg p-2 photo"
                  alt="Sudip lahiri"
                />
                <div className="info">
                  <div className="title">
                    <a target="_blank" href="https://scripteden.com/">
                      Sudip Lahiri
                    </a>
                  </div>
                  <div className="desc">Passionate designer</div>
                  <div className="desc">Curious developer</div>
                  <div className="desc">Tech geek</div>
                </div>
                <div className="bottom">
                  <a
                    title="Github"
                    href="https://github.com/mhjadav/mojaave"
                    className="card-link text-black"
                  >
                    <i className="fa fa-github" />
                  </a>
                  <a
                    title="Twitter"
                    href="https://twitter.com/techno_wise1"
                    className="card-link text-black"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    title="Email"
                    href="mailto:bestcodeeditor@gmail.com"
                    className="card-link text-black"
                  >
                    <i className="fa fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body bg-dark shadow-lg">
          <h5 className="card-title">Professional Skill</h5>
          <h2 className="card-text">
            Javascript, HTML5, CSS3, ReactJS,Redux, NodeJS, GraphQl, GatsbyJS,
            Bootstrap, DB(Mongodb, sql), Git, Webpack, Ionic, AngularJS, Rails6,
            Django
          </h2>
        </div>
      </div>
    )}
  />
);
