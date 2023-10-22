import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const drinksData = await fetch('http://localhost:4000/api/drinks', {
  method: 'GET',
});

const drinksAnswer = await drinksData.json();
const drinks = drinksAnswer.result;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  </div>,
);

const changeNavClosed = () => {
  const rolloutNavElement = document.querySelector('.rollout-nav');
  rolloutNavElement.classList.toggle('nav-closed');
};

const navBtnElement = document.querySelector('.nav-btn');
navBtnElement.addEventListener('click', changeNavClosed);

const changeNavAll = () => {
  const rolloutNavElement = document.querySelector('.rollout-nav');
  rolloutNavElement.classList.toggle('nav-closed');
};

const rollNavElement = document.querySelector('.rollout-nav');
rollNavElement.addEventListener('click', changeNavAll);

document.querySelectorAll('.drink_form').forEach((item) => {
  item.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formElement = event.target;
    const id = formElement.querySelector('input').value;

    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true }]),
    });

    window.location.reload();
  });
});
