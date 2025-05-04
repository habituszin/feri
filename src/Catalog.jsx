import './Catalog.css'
import CatalogElement from './CatalogElement';

const elements = [
  {
  name: 'Basic asztal',
  description: `A LACK asztalt sok mindenre használhatod és bárhol remekül mutat.
                A méhsejtes papírnak köszönhetően erős szerkezetű, mégis nagyon könnyű, így egyszerű mozgatni. Hazavinni is szinte gyerekjáték lesz!
                Könnyű összeszerelni.
                Kombinálható a LACK sorozat további termékeivel. A KALLAX termékekhez is illik.`,
  image: 'basic',
  imageCount: 5
  },
  {
  name: 'Basic asztal',
  description: `A LACK asztalt sok mindenre használhatod és bárhol remekül mutat.
                A méhsejtes papírnak köszönhetően erős szerkezetű, mégis nagyon könnyű, így egyszerű mozgatni. Hazavinni is szinte gyerekjáték lesz!
                Könnyű összeszerelni.
                Kombinálható a LACK sorozat további termékeivel. A KALLAX termékekhez is illik.`,
  image: 'basic',
  imageCount: 5
  },
  {
  name: 'Basic asztal',
  description: `A LACK asztalt sok mindenre használhatod és bárhol remekül mutat.
                A méhsejtes papírnak köszönhetően erős szerkezetű, mégis nagyon könnyű, így egyszerű mozgatni. Hazavinni is szinte gyerekjáték lesz!
                Könnyű összeszerelni.
                Kombinálható a LACK sorozat további termékeivel. A KALLAX termékekhez is illik.`,
  image: 'basic',
  imageCount: 5
  },
];

function Catalog() {
  return (
    <div className="catalog">
      {elements.map((element) => CatalogElement(element))}
    </div>
  );
}

export default Catalog;
