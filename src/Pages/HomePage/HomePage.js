import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
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
          <div className="hire-talent mr-[30px]">
            <a href="#hire-talent">Hire Talent</a>
          </div>
          <div className="apply-jobs">
            <a href="#apply-jobs">Apply for Jobs</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
