import React, { useState } from "react";



const ProductImages = ({ imgs = [{ url: "" }] }) => {
  const [myimage, setimage] = useState(imgs[0]);

  return (
    <div className="grid md:grid-cols-2 p-5">
      <div className="grid grid-flow-col md:grid-flow-row">
        {imgs.map((curElem, index) => {
          return (
            <img
              className="md:ml-12 m-5 h-10 md:h-auto w-[50%] rounded"
              src={curElem.url}
              alt={curElem.filename}
              key={index}
              onClick={() => setimage(curElem)}
            />
          );
        })}
      </div>
      <div className=" grid place-items-center">
        <img
          className="w-[100%] rounded"
          src={myimage.url}
          alt={myimage.filename}
        />
      </div>
    </div>
  );
};

export default ProductImages;
