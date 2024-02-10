import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { OrderItems } from '../components/OrderItems';

const orderData = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
  {
    method: 'GET',
  },
);

const orderAnswer = await orderData.json();
const orders = orderAnswer.result;

//<p className="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>;//

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header />
      <main className="order">
        <div className="order__content container">
          <h1>Vaše objedávnka</h1>

          <div className="order__items">
            {orders.map((order) => {
              return (
                <OrderItems
                  key={order.id}
                  name={order.name}
                  image={'http://localhost:4000' + order.image}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>,
);
