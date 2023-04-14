import React from "react";
import Link from "next/link";

const PortfolioDetailStartProject = (props) => {
  return (
    <div
      className="c-start-a-project u-fill-white a-color-wipe u-white +on-white-background u-pos-rel is-in-view"
      id="start-a-project-block_5ea757f1010b2"
    >
      <div className="o-wrap u-flex u-align-items-center u-pos-rel">
        <div className="c-start-a-project__content is-in-view">
          {/* <span className="c-morse-logo u-primary u-milli a-slide-up-fade a-stacked__child +500 is-in-view"></span> */}
          <p className="u-bold u-delta u-epsilon@l u-3/4@l u-marg-top-bottom u-pad-right-x2 a-slide-up-fade a-stacked__child +600 is-in-view">
            Let’s build something incredible together
          </p>
          <p className="u-beta u-marg-bottom-x2 u-3/4@l u-pad-right-x2 a-slide-up-fade a-stacked__child +700 is-in-view">
            With a few details we’ll be able to kickstart your custom software
            project.
          </p>
          <Link href="/contactus">
            <a>Start A Project</a>
          </Link>
        </div>
        <div className="c-start-a-project__image u-hide@m- a-bounce-in-bottom js-anim a-stacked__child +600">
          <img
            alt="Retro boy with robot"
            className="ls-is-cached lazyloaded"
            src="https://gcdtech.com/wp-content/themes/gcdtech-theme/images/retro-collection/retro-boy.png"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailStartProject;
