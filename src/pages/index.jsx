import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
