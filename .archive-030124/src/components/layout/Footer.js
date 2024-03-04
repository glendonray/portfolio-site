import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <section className='footer home-section bg-black'>
      <div className='container'>
        <div className='skills-container bg-yellow navy card'>
          <h2>Skills</h2>
          <div className='skills'>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>SCSS/SASS</li>
              <li>Gulp</li>
              <li>React</li>
              <li>NPM</li>
              <li>Git</li>
              <li>Wordpress</li>
              <li>MySQL/</li>
              <li>phpMyAdmin</li>
              <li>JQuery</li>
              <li>Google Analytics/Tag Manager</li>
              <li>Hubspot</li>
              <li>Adobe Creative Suite</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
        <div className='contact bg-gray card'>
          <h2>Social</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={['fas', 'id-card']} />{' '}
              <a
                href='https://www.notion.so/glendonray/Glendon-Grapperhaus-9147237bfbe349c79eeff0c7132723e4'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                Resume
              </a>
            </li>
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
  );
};

export default Footer;
