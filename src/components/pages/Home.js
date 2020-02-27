import React, { Fragment } from 'react';
import headshot from './gg_headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => (
  <Fragment>
    <section className='intro home-section bg-yellow'>
      <div className='container'>
        <div className='intro-text-container'>
          <div className='intro-text '>
            <h2>Full Stack Web Developer</h2>
            <p>
              My name is Glendon Grapperhaus. I am a Full Stack Web developer
              with skills in UI/UX, graphic design, and illustrating. I live in
              Saint Louis, MO with my wife, cats, and dogs.
            </p>
            <p>
              In my career I am passionate about building things that are
              practical, accessible, semantically correct, beautiful, and fun.
              Outside of my career I am passionate about friends, food,
              technology, NPR, Marvel, and the environment.
            </p>
          </div>
        </div>
        <div className='intro-image'>
          <img className='headshot' src={headshot} alt='Glendon Grapperhaus' />
        </div>
      </div>
    </section>
    <section className='work home-section bg-navy'>
      <div className='container'>
        <div className='skills bg-black card'>
          <h2>Skills</h2>
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Wordpress</li>
            <li>UI/UX</li>
          </ul>
        </div>
        <div className='sites bg-yellow card black'>
          <h2>Sites I've Built</h2>
          <ul>
            <li>
              <a href='https://jabian.com'>jabian.com</a>
            </li>
            <li>
              <a href='https://journal.jabian.com'>journal.jabian.com</a>
            </li>
            <li>
              <a href='https://corelinksurgical.com'>corelinksurgical.com</a>
            </li>
            <li>
              <a href='https://compasshealthnetwork.org'>
                compasshealthnetwork.org
              </a>
            </li>
            <li>
              <a href='https://unitedway.monsanto.com'>
                unitedway.monsanto.com
              </a>
            </li>
            <li>
              <a href='https://eliasllc.com'>eliasllc.com</a>
            </li>
            <li>
              <a href='https://duodogs.org'>duodogs.org</a>
            </li>
          </ul>
        </div>
        <div className='contact bg-gray card'>
          <h2>Social</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />{' '}
              <a
                href='https://www.linkedin.com/in/glendonray/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/glendonray
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'envelope']} />{' '}
              <a
                href='mailto: glendonray@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                glendonray@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'github']} />{' '}
              <a
                href='https://github.com/glendonray'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/glendonray
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'dribbble']} />{' '}
              <a
                href='https://dribbble.com/glendonray'
                target='_blank'
                rel='noopener noreferrer'
              >
                dribbble.com/glendonray
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
