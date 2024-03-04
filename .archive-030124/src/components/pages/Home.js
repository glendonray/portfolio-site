import React, { Fragment } from 'react';
import headshot from './gg_headshot.jpg';
import Portfolio from '../layout/Portfolio';
import Footer from '../layout/Footer';

export const Home = () => (
  <Fragment>
    <section className='intro home-section bg-yellow'>
      <div className='container'>
        <div className='intro-text-container'>
          <div className='intro-text'>
            <h2>Web Developer</h2>
            <p>
              My name is Glendon Grapperhaus. I am a Full Stack Web developer with skills in UI/UX,
              graphic design, and illustrating. I live in Saint Louis, MO with my wife, cats, and
              dogs.
            </p>
            <p>
              In my career I am passionate about building things that are practical, accessible, and
              beautiful. Outside of my career I am passionate about friends, food, technology, NPR,
              Marvel, and the environment.
            </p>
          </div>
        </div>
        <div className='intro-image'>
          <img className='headshot' src={headshot} alt='Glendon Grapperhaus' />
        </div>
      </div>
    </section>
    <Portfolio />
    <Footer />
  </Fragment>
);

export default Home;
