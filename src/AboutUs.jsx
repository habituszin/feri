import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>Rólunk</h1>
        <p>
          Üdvözlünk a weboldalunkon! Cégünk elkötelezett a minőség és az innováció iránt.
          Célunk, hogy ügyfeleink számára a legjobb termékeket és szolgáltatásokat nyújtsuk.
        </p>
        <p>
          Csapatunk szenvedélyesen dolgozik azon, hogy minden projektet a lehető legmagasabb színvonalon valósítsunk meg.
          Köszönjük, hogy minket választottál!
        </p>
      </div>
      <div className="about-us-image">
        <img src="./logo.png" alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;
