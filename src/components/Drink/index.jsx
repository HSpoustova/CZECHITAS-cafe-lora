import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  const ButtonText = ordered ? 'Zrušit' : 'Objednat';
  const addButtonClass = ordered ? 'order-btn order-btn--ordered' : 'order-btn';

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => {
            return (
              <Layer
                key={layer.label}
                color={layer.color}
                label={layer.label}
              />
            );
          })}
        </div>
      </div>
      <div className="drink__controls">
        <form className="drink_form">
          <button className={addButtonClass} type="submit">
            {ButtonText}
          </button>
          <input type="hidden" value={id} />
        </form>
      </div>
    </div>
  );
};
