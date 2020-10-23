import React, { useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer, Image } from "react-konva";
import useImage from "use-image";

const CanvasSideBar = ({ onSelectImage }) => {
  const [img, setImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
        onSelectImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div>
      <div className="page">
        <div className="container">
          <h6 className="heading">Add your Image</h6>

          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default CanvasSideBar;
