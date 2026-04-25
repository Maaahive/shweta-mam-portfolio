import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import "./index.css";

export default function Carousel({
  title,
  items = [],
  autoplay = false,
  autoplayDelay = 10000,
}) {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const containerRef = useRef(null);

  useEffect(() => {
    if (!autoplay || items.length <= 1) return undefined;

    const timer = setInterval(goNext, autoplayDelay);

    return () => clearInterval(timer);
  }, [index, autoplay, autoplayDelay, items.length]);

  return (
    <div className="car-main" ref={containerRef}>
      {title && <div className="carousel-title">{title}</div>}

      <div className="mini-car">
        <button className="sw-btn prev-btn" onClick={goPrev}>
          <i className="fa-solid fa-angles-left"></i>
        </button>

        <motion.div
          key={index}
          className="img"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <img src={items[index].image} className="carousel-img" alt="" />

          {items[index].caption && (
            <div className="cap">{items[index].caption}</div>
          )}
        </motion.div>

        <button className="sw-btn next-btn" onClick={goNext}>
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
