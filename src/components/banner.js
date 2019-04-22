// import React from "react";
// import { StaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query profileImage {
//         file(relativePath: { eq: "cover.jpg" }) {
//           childImageSharp {
//             sizes(maxWidth: 450, maxHeight: 450) {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <section id="header">
//         <div className="jumbotron jumbotron-fluid">
//           <div className="container">
//             <div className="col-12">
//               <div className="card bg-dark shadow-lg">
//                 <div className="card-body bg-warning about">
//                   <div className="row">
//                     <div className="col-md-3 col-xs-12 d-flex justify-content-center">
//                       <Img
//                         sizes={data.file.childImageSharp.sizes}
//                         src={data.file.childImageSharp.sizes.src}
//                         className="shadow-lg p-2 photo"
//                         alt="Sudip lahiri"
//                       />
//                     </div>
//                     <div className="col-md-9 col-xs-12 about-text">
//                       <h1 className="card-text text-black">Hi, Sudip Lahiri</h1>
//                       <h4 className="card-text text-black">
//                         A Enthusiastic software developer
//                       </h4>
//                       <hr />
//                       <h4>
//                         <div>
//                           <a
//                             title="Github"
//                             href="https://github.com/mhjadav/mojaave"
//                             className="card-link text-black"
//                           >
//                             <i className="fa fa-github" />
//                           </a>
//                           <a
//                             title="Twitter"
//                             href="https://twitter.com/techno_wise1"
//                             className="card-link text-black"
//                           >
//                             <i className="fa fa-twitter" />
//                           </a>
//                           <a
//                             title="Email"
//                             href="mailto:bestcodeeditor@gmail.com"
//                             className="card-link text-black"
//                           >
//                             <i className="fa fa-envelope" />
//                           </a>
//                           {/* <a
//                             title="Linkedin"
//                             href="https://www.linkedin.com/in/mhjadav/"
//                             className="card-link text-black"
//                           >
//                             <i className="fa fa-linkedin" />
//                           </a> */}
//                           <a
//                             title="Skype"
//                             href="skype:sudiplahiri2013?chat"
//                             className="card-link text-black"
//                           >
//                             <i className="fa fa-skype" />
//                           </a>
//                         </div>
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body bg-dark shadow-lg">
//                   <h5 className="card-title">Professional Skill</h5>
//                   <h2 className="card-text">
//                     Javascript, HTML5, CSS3, ReactJS,Redux, NodeJS, GraphQl,
//                     GatsbyJS, Bootstrap, DB(Mongodb, sql), Git, Webpack, Ionic,
//                     AngularJS, Rails6, Django
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )}
//   />
// );
