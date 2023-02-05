import React, {useState, useCallback, useEffect} from 'react';
import { IoIosExpand } from "react-icons/io";
import "./OverviewCss/imageGallery.css";
import CarouselThumbnail from './CarouselThumbnail.jsx';

const ImageGallery = ({photos, mainPhoto, setMainPhoto, expandView, setExpandView, zoom, setZoom, photoIndex, setPhotoIndex}) => {

  const mainContainer = document.getElementById("test");
  const img = document.getElementById("expandview");

  if (img && mainContainer) {
    var onZoom = useCallback(e => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      mainContainer.style.transition = "transform 0.5s";
      mainContainer.style.transformOrigin = `${x}px ${y}px`;
      mainContainer.style.transform = "scale(2.5)";
    }, [])
    var offZoom = useCallback(e => {
      mainContainer.style.transform = "scale(1)";
    }, []);
 }

  let expandFunction = (zoom) => {
    if (!zoom) {
      mainContainer.style.cursor = `url('https://img.icons8.com/material-outlined/24/null/minus-math.png'), auto`;
      img.addEventListener("mousemove", onZoom);
      img.addEventListener("mouseover", onZoom);
      img.addEventListener("mouseleave", offZoom);
    } else {
      img.style.transform = "scale(1)";
      mainContainer.style.transform = "scale(1)";
      mainContainer.style.cursor = 'crosshair';
      img.removeEventListener("mousemove", onZoom);
      img.removeEventListener("mouseover", onZoom);
      img.removeEventListener("mouseleave", offZoom);
    }
  }
  const outOfStock = "https://as2.ftcdn.net/v2/jpg/00/50/45/79/1000_F_50457976_7Zng8KAqYAHf9ZcOivdqg40oF5IHWIYU.jpg"

  return (
    <div id="imageGallery">
      <div id="main">
        {expandView ?
        <div id="test" onClick={() => {setZoom(!zoom); expandFunction(zoom)}} style={{cursor: 'crosshair'}}><img id="expandview" src={mainPhoto[photoIndex].url || outOfStock} alt="placeHolder" ></img></div> :
        <div id="test" onClick={() => {setExpandView(!expandView)}} style={{cursor: 'zoom-in'}}><img id="expandview" src={mainPhoto[photoIndex].url || outOfStock} alt="placeHolder"></img></div>}
        {expandView && !zoom ? <div className="expand" onClick={() => {setExpandView(!expandView)}}><IoIosExpand /></div> : null}
      </div>
      {zoom ? null : <CarouselThumbnail photos={photos.photos} setMainPhoto={setMainPhoto} mainPhoto={mainPhoto} zoom={zoom} photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>}
    </div>
  );
};

export default ImageGallery;