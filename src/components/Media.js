import React from "react";

const Media = () => {
  return (
    <section className="media">
      <iframe
        src="https://www.youtube.com/embed/lOrU0MH0bMk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/B6DmQP4cgsQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Media;
