import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./AppleProduct.scss";

function AppleProduct(props) {
  const canvasRef = useRef();
  const containerRef = useRef();
  const [displayImage, setDisplayImage] = useState(new Image());
  const frameCount = 147;

  const canvasContentRenderer = () => {
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.height = 770;
    canvasRef.current.width = 1158;

    displayImage.src = renderCurrentFrame(1);
    displayImage.onload = () => {
      context.drawImage(displayImage, 0, 0);
    };
  };

  const renderCurrentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const updateImage = (context, index) => {
    displayImage.src = renderCurrentFrame(index);
    context.drawImage(displayImage, 0, 0);
  };

  useEffect(() => {
    canvasContentRenderer();

    containerRef.current.addEventListener("scroll", () => {
      const scrollTop = containerRef.current.scrollTop;
      const maxScrollTop =
        containerRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => {
        updateImage(canvasRef.current.getContext("2d"), +frameIndex + 1);
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="airpods">
      <div className="airpods-container">Apple Airpod PRO</div>
      <canvas ref={canvasRef} className="airpods-scrolling"></canvas>
    </div>
  );
}

AppleProduct.propTypes = {};

export default AppleProduct;
