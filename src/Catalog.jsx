import './Catalog.css'
import CatalogElement from './CatalogElement';

const elements = [
  {
  name: 'Teszt asztal',
  description: 'This is the first element.',
  image: 'basic',
  imageCount: 5
  },
];

function Catalog() {
  return (
    <div class name="catalog">
      {elements.map((element) => CatalogElement(element))}
    </div>
  );
}

export default Catalog;
