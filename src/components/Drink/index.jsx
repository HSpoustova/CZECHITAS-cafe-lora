import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <Layer color="#feeeca" label="mléčná pěna" />
        </div>
      </div>
      <div className="drink__controls">
        <form>
          <button className="order-btn" type="submit">
            Objednat
          </button>
          <input type="hidden" value={id} />
        </form>
      </div>
    </div>
  );
};
