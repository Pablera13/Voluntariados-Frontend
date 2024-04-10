import React from "react";

function HeroHeader({ header, text, img}) {
  return (
    <section id="heroheader" style={{
        background: `url(../src/assets/${img}.jpg)`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        position: 'relative',
        color: '#fff',
        padding: '60px 0 40px 0',
      }}>
      <div className="container position-relative" data-aos="fade-up">
        <div className="row">
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
