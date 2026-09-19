import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Leadership from '../sections/Leadership';
import Recognition from '../sections/Recognition';
import Work from '../sections/Work';
import Speaking from '../sections/Speaking';
import Writing from '../sections/Writing';
import Book from '../sections/Book';

const Home = () => (
  <>
    <Hero />
    <About />
    <Leadership />
    <Recognition />
    <Work />
    <div id="thought-leadership">
      <Speaking />
      <Writing />
      <Book />
    </div>
  </>
);

export default Home;
