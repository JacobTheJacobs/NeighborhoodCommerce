import React, { useState } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer, Image } from "react-konva";
import useImage from "use-image";
import CanvasSideBar from "./canvasSideBar";
import "./style.css";

const url = "https://konvajs.github.io/assets/yoda.jpg";

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange, image }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  const [image1] = useImage(image ? image : url);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Image
        image={image1}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      <Rect />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2",
  },
];

const ConvasArea = () => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);
  const [image, setImage] = useState(url);
  const [images, setImages] = useState([]);

  const handleImageChange = (img) => {
    setImage(img);
    const tempImag = [];
    tempImag.push(img);
    setImages(tempImag);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <div className="">
      <div className="wrapper">
        <CanvasSideBar onSelectImage={handleImageChange} />
      </div>

      <div>
        <Stage
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          style={{
            border: "5px solid black",
          }}
        >
          <Layer>
            {rectangles.map((rect, i) => {
              return (
                <>
                  {images.length > 0
                    ? images.forEach((img, _) => (
                        <Rectangle
                          image={img}
                          key={_}
                          key={i}
                          shapeProps={rect}
                          isSelected={rect.id === selectedId}
                          onSelect={() => {
                            selectShape(rect.id);
                          }}
                          onChange={(newAttrs) => {
                            const rects = rectangles.slice();
                            rects[i] = newAttrs;
                            setRectangles(rects);
                          }}
                        />
                      ))
                    : null}
                </>
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
export default ConvasArea;
