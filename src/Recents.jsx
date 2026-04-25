import Carousel from "./Carousel";
import { useState, useEffect, useRef } from "react";

import "./index.css";

const lab = [
  {
    id: 1,
    image: "/Recents/lab/pic3.png",
    caption: "Anechoic Chamber (Radiation Measurement up to 30 GHz)"
  },
  {
    id: 3,
    image: "/Recents/lab/pic1.jpg",
    caption: "PHCNC Machine",
  },
  {
    id: 2,
    image: "/Recents/lab/pic2.png",
    caption: "Anritsu Make Vector Network Analyzer (Measurement up to 40GHz)",
  },
  
];

export default function Recents() {
  const containerRef = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="car" ref={containerRef}>
      <section className="sw">
        <ul>
          <li>
            <Carousel
              title={
            <>
              <p>RF & Microwave Research Facility</p>
            </>
              }
              items={lab}
              baseWidth={width}
              height={500}
              autoplay
              autoplayDelay={15000}
              pauseOnHover={false}
              loop
              round={false}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
