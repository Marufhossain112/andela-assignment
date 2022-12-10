import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h1 className="has-andela-v-5-white-color has-text-color">
            Discover <em>brilliant</em> talent
            <br />
            around the world
          </h1>{" "}
          <p className="has-andela-v-5-white-color has-text-color">
            Join Andela to build your team with developers, engineers, product
            designers, and the best remote technology experts.
          </p>{" "}
          <div className="flex mt-[50px]">
            <div className="hire-talent mr-[5px]">
              <a href="#hire-talent">Hire Talent</a>
            </div>
            <div className="apply-jobs">
              <a href="#apply-jobs">Apply for Jobs</a>
            </div>
          </div>
        </div>
      </div>
      <div className="under-header  ">
        <div className="container-bottom-header flex items-center">
          <div>
            <h3 id="block-70ac3112-819c-4ef9-a814-04509a2340bf">
              Andela Launches New Platform
              <br />
              to <em>Power the Future</em> of Customized Work
            </h3>
          </div>
          <div className="hire-talent ml-[80px]">
            <a href="#hire-talent">Find Out More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
