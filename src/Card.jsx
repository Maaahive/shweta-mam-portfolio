import { useState } from "react";

export default function PubCard({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const active = images[index];

  return (
    <div className="pub-card">
      <ul>
        <li>
          <p className="title">{title}</p>
        </li>
      </ul>
      <div className="mini-car">
        <button onClick={prev} className="prev">
          ‹
        </button>

        <div className="img">
          <img src={active.image} />

          <div className="cap">{active.caption}</div>
        </div>

        <button onClick={next} className="next">
          ›
        </button>
      </div>
    </div>
  );
}
