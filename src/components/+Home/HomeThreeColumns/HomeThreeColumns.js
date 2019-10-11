import React from "react";
// import Wrapper from "../../Layouts/Wrapper";

const HomeThreeColumns = () => {
  return (
    <div className='home__threeColumns'>
      {/* <Wrapper> */}
      <div className='home__threeColumns-box'>
        <div className='home__column'>
          <h1>10</h1>
          <p>oddanych worków</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className='home__column'>
          <h1>5</h1>
          <p>wspartych organizacji</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className='home__column'>
          <h1>7</h1>
          <p>zorganizowanych zbiórek</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
      </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default HomeThreeColumns;
