import React from "react";
import CustomTitle from "../../Layouts/CustomTitle";

const HomeAboutUs = () => {
  return (
    <div className='home__aboutUs' id='about-us'>
      <div className='home__description-box'>
        <CustomTitle>O nas</CustomTitle>
        <div className='home__desc'>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
        </div>

        <div className='home__signature'></div>
      </div>
      <div className='home__banner'></div>
    </div>
  );
};

export default HomeAboutUs;
