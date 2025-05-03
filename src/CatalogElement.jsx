import './CatalogElement.css';

function CatalogElement({
  name,
  description,
  image,
  imageCount,
}) {
  return (
    <div className="catalog-element">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={`${image}1.avif`} alt={name} />
      <div>
      {Array.from(imageCount, (_, index) => (
        <img key={index} src={`${image}${index + 1}.avif`} alt={`${name} ${index + 1}`} />
      ))}
      </div>
    </div>
  );
}

export default CatalogElement;
