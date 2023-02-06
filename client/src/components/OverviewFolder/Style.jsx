import React, {useState} from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Style = ({allStyleResult, setItemStyle, check, setCheck, setPhotoIndex}) => {

  const outOfStock = "https://as2.ftcdn.net/v2/jpg/00/50/45/79/1000_F_50457976_7Zng8KAqYAHf9ZcOivdqg40oF5IHWIYU.jpg"

  return (
      <div className="styleIcons">
        {allStyleResult.map((item) => (
          <div className="styleDiv" key={item.style_id}>
            {item.style_id === check ? <FaCheckCircle id="check"/>: null}
            <img className="stylePhotos" src={item.photos[0].thumbnail_url || outOfStock} alt="placeHolder" onClick={() => { setCheck(item.style_id); setItemStyle(item); setPhotoIndex(0) }}></img>
          </div>
        ))}
      </div>
  );
};

export default Style;