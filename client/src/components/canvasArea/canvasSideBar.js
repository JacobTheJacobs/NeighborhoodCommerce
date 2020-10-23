import React, { useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer, Image } from "react-konva";
import useImage from "use-image";
import Button from "@material-ui/core/Button";

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
          <br></br>

          <label htmlFor="filePicker" className="btn btn-warning">
            Add Image
          </label>
          <input
            id="filePicker"
            type="file"
            accept="image/*"
            name="image-upload"
            onChange={imageHandler}
            style={{
              visibility: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CanvasSideBar;
