import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

export const PortfolioItem = props => {
  return (
    <Fade>
      <div className='portfolio-item bg-white br4 navy overflow-hidden'>
        <div className='portfolio-description pa4'>
          <h3 className='title'>{props.title}</h3>
          <p className='description mb3'>{props.description}</p>
          <div className='btn-container'>
            <a
              className='dib btn'
              rel='nofollow noreferrer noopener'
              target='_blank'
              href={props.url}
            >
              <span className='btn-txt'>
                <FontAwesomeIcon icon='external-link-alt' /> View Site
              </span>
            </a>
          </div>
        </div>
        <div className='portfolio-image'>
          <img src={props.img} alt={props.alt} className='db' />
        </div>
      </div>
    </Fade>
  );
};

export default PortfolioItem;
