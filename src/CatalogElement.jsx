import React from 'react';
import './CatalogElement.css';

function CatalogElement({
  name,
  description,
  image,
  imageCount,
}) {
  const [mainImage, setMainImage] = React.useState(`${image}1.avif`);
  const [fade, setFade] = React.useState(false);

  const handleImageChange = (newImage) => {
    setFade(true);
    setTimeout(() => {
      setMainImage(newImage);
      setFade(false);
    }, 200);
  };

  return (
    <div key={name} className="catalog-element">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={mainImage} alt={name} className={fade ? 'fade-out' : 'fade-in'} />
      <div>
        {Array.from({ length: imageCount }, (_, index) => (
          <img
            key={index}
            src={`${image}${index + 1}.avif`}
            alt={`${name} ${index + 1}`}
            onClick={() => handleImageChange(`${image}${index + 1}.avif`)}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogElement;
