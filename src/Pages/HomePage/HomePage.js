import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      {/* header */}
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
      {/* under header  */}
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
      {/* trusted section */}
      <div className="trusted mb-0">
        <div>
          <h3 class="text-center text-black">Trusted by</h3>
          <div className="flex justify-center items-center max-w-7xl mx-auto ">
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  src="https://andela.com/wp-content/uploads/2022/03/github-logo.svg"
                  alt=""
                  class="wp-image-76034"
                  width="96"
                  height="26"
                />
              </figure>{" "}
            </div>
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://andela.com/wp-content/uploads/2022/03/invision-logo.svg"
                  alt=""
                  class="wp-image-76036"
                  width="120"
                  height="40"
                />
              </figure>{" "}
            </div>
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://andela.com/wp-content/uploads/2022/03/coursera-logo.svg"
                  alt=""
                  class="wp-image-76033"
                  width="144"
                  height="20"
                />
              </figure>{" "}
            </div>
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://andela.com/wp-content/uploads/2022/03/Kraft-Heinz-Logo.svg"
                  alt=""
                  class="wp-image-76145"
                  width="164"
                  height="28"
                />
              </figure>{" "}
            </div>
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://andela.com/wp-content/uploads/2022/03/seismic-logo.svg"
                  alt=""
                  class="wp-image-76037"
                  width="150"
                  height="32"
                />
              </figure>{" "}
            </div>
            <div class="partner">
              {" "}
              <figure class="wp-block-image size-large">
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://andela.com/wp-content/uploads/2022/03/goldman-sachs-logo.svg"
                  alt=""
                  class="wp-image-76035"
                  width="110"
                  height="44"
                />
              </figure>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* build your team */}
      <div className="build-team grid grid-cols-2 bg-white">
        <div className="">
          <figure>
            <img
              decoding="async"
              loading="lazy"
              src="https://andela.com/wp-content/uploads/2022/11/Andela_NewLogos.png"
              alt="Trust in Andela"
              class="wp-image-78305"
              srcset="https://andela.com/wp-content/uploads/2022/11/Andela_NewLogos.png 848w, https://andela.com/wp-content/uploads/2022/11/Andela_NewLogos-300x183.png 300w, https://andela.com/wp-content/uploads/2022/11/Andela_NewLogos-768x468.png 768w"
              sizes="(max-width: 848px) 100vw, 848px"
              width="848"
              height="517"
            />
          </figure>
        </div>
        <div class="build-team-para flex  flex-col justify-center  ">
          {" "}
          <h5 class="eyebrow">Build your team today </h5>{" "}
          <h2>We’ve cracked the code on creating engineering teams</h2>{" "}
          <p class="is-style-checkmark-list">
            <span className="build-team-span">
              Skilled engineers, product managers, and designers at your
              fingertips. An extensive list of technical services to suit your
              business needs. Start building your world-class team faster with
              talent from Andela.
            </span>
          </p>{" "}
          <div class="is-layout-flex wp-block-buttons">
            {" "}
            <div class="hire-talent inline-block mt-5">
              <a class="" href="andela.com/hire-talent/">
                Build your team
              </a>
            </div>{" "}
          </div>{" "}
        
        </div>
      </div>
    </div>
  );
};
export default HomePage;
