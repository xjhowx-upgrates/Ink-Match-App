// src/pages/TattooArtistProfile.tsx
import React from 'react';

const TattooArtistProfile = () => {
  return (
    <div className="profile-container">
      <h1>Tattoo Artist Profile</h1>
      <div className="profile-details">
        <h2>John Doe</h2>
        <p>Specialty: Realistic Tattoos</p>
        <p>
          John Doe is a skilled tattoo artist with over 10 years of experience. He specializes in realistic tattoos and has created hundreds of amazing designs for his clients.
        </p>
      </div>
      <div className="portfolio">
        <h3>Portfolio</h3>
        <p>Here are some examples of John's work:</p>
        <div className="portfolio-gallery">
          <img src="image1.jpg" alt="Tattoo 1" />
          <img src="image2.jpg" alt="Tattoo 2" />
          <img src="image3.jpg" alt="Tattoo 3" />
        </div>
      </div>
    </div>
  );
};

export default TattooArtistProfile;
