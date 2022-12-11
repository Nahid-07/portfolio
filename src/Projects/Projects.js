import React from "react";
import ss1 from "./../assets/Screenshot (100).png";
import ss2 from "../assets/a-12-firebase-auth.web.app_ (3).png";
import ss3 from "../assets/Screenshot (9).png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div id="projects" className="bg-slate-600 p-20">
        <h1 className="text-center text-4xl font-bold mb-10 text-orange-400">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
          <div className="card card-compact bg-slate-900 shadow-xl">
            <figure>
              <img src={ss1} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Project Travelog</h2>
              <p>
                A travel guide project. User can know about the cost of the each
                tourist spot. Also they will know how can they go there
              </p>
              <div className="card-actions justify-end">
              <label htmlFor="details2" className="btn">
                  See details
                </label>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-slate-900 shadow-xl">
            <figure>
              <img src={ss2} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Project SellBD</h2>
              <p>
                This is second-hand product buys and sells website. Where a
                seller can post their product. A payment option enable this
                website
              </p>
              <div className="card-actions justify-end">
                <label htmlFor="my-modal-5" className="btn">
                  See details
                </label>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-slate-900 shadow-xl">
            <figure>
              <img src={ss3} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">Project techBD</h2>
              <p>
                A digital course selling website. Here user can buys theire
                preffered programming language courses. Before buy any course
                user must be log in first
              </p>
              <div className="card-actions justify-end">
              <label htmlFor="details3" className="btn">
                  See details
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
