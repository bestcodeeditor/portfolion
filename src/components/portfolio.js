import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { styles, Section } from "../utils";
import Img from "gatsby-image";

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "portfolio/react.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img2: file(relativePath: { eq: "portfolio/next.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img3: file(relativePath: { eq: "portfolio/nodejs.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img4: file(relativePath: { eq: "portfolio/mongodb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img5: file(relativePath: { eq: "portfolio/html5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img6: file(relativePath: { eq: "portfolio/ionic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img7: file(relativePath: { eq: "portfolio/gatsby.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img8: file(relativePath: { eq: "portfolio/python.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Portfolio = () => (
  <StaticQuery
    query={SINGLE_IMAGE}
    render={data => {
      const img1 = data.img1.childImageSharp.fluid;
      const img2 = data.img2.childImageSharp.fluid;
      const img3 = data.img3.childImageSharp.fluid;
      const img4 = data.img4.childImageSharp.fluid;
      const img5 = data.img5.childImageSharp.fluid;
      const img6 = data.img6.childImageSharp.fluid;
      const img7 = data.img7.childImageSharp.fluid;
      const img8 = data.img8.childImageSharp.fluid;

      return (
        <Section>
          <PortfolioWrapper>
            <div className="item item-1">
              <Img fluid={img1} className="card-img-top" />
              <p className="info">profficiency 95%</p>
            </div>
            <div className="item item-2">
              <Img fluid={img2} className="card-img-top" />
              <p className="info">profficiency 95%</p>
            </div>
            <div className="item item-3">
              <Img fluid={img3} className="card-img-top" />
              <p className="info">profficiency 93%</p>
            </div>
            <div className="item item-4">
              <Img fluid={img4} className="card-img-top" />
              <p className="info">profficiency 93%</p>
            </div>
            <div className="item item-5">
              <Img fluid={img5} className="card-img-top" />
              <p className="info">profficiency 94%</p>
            </div>
            <div className="item item-6">
              <Img fluid={img6} className="card-img-top" />
              <p className="info">profficiency 80%</p>
            </div>
            <div className="item item-7">
              <Img fluid={img7} className="card-img-top" />
              <p className="info">profficiency 95%</p>
            </div>
            <div className="item item-8">
              <Img fluid={img8} className="card-img-top" />
              <p className="info">profficiency 82%</p>
            </div>
          </PortfolioWrapper>
        </Section>
      );
    }}
  />
);

const PortfolioWrapper = styled.div`
  display: grid;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .item:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: all 0.3s ease-in-out;
  }
  .item:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.8;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one  two three four "
      "five  six seven eight";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
    .item-4 {
      grid-area: four;
    }
    .item-5 {
      grid-area: five;
    }
    .item-6 {
      grid-area: six;
    }
    .item-7 {
      grid-area: seven;
    }

    .item-8 {
      grid-area: eight;
    }
  }
`;

export default Portfolio;
