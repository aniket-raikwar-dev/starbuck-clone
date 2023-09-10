import React from 'react';
import RightArrow from "../images/rigthArrow.png";

const ShowRoutesName = ({routeName}) => {
  return (
    <div className='show-route-name'>
       <p>Home</p>
       <img className='ml-1 mr-2 mt-1' style={{width: "10px"}} src={RightArrow} alt="" />
       <p>{routeName}</p>
    </div>
  )
}

export default ShowRoutesName;