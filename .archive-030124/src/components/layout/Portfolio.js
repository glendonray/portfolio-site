import React from 'react';
import PortfolioItem from './PortfolioItem';

import jabian from './portfolioImages/chicago_crop.jpg';
import jabianJournal from './portfolioImages/jj_spring_2019_ft_art_crop.jpg';
import corelink from './portfolioImages/corelink_spine_crop.jpg';
import jas from './portfolioImages/jas_sps_model.png';
import compass from './portfolioImages/compass_health_patients_crop.jpg';
import bayer from './portfolioImages/bayer_unitedway_smiling_girl.jpg';
import elias from './portfolioImages/elias_whistleblowing_graphic.png';
import duo from './portfolioImages/duodogs_paw_heart.png';

export const Portfolio = () => {
  return (
    <section className='portfolio-container bg-navy'>
      <div className='container'>
        <h2 className='f1 mb4 mb5-l tc'>Portfolio</h2>
        <div className='portfolio'>
          <PortfolioItem
            title='Jabian.com'
            description='Jabian is a consulting firm based out of Atlanta, Georgia. They requested a redesign of their website that would support the management of many content types including a blog, case studies, services, staff, insights, and their journal articles. All supported by an enhanced search feature.'
            img={jabian}
            alt='Chicago Coast'
            url='https://jabian.com'
          />
          <PortfolioItem
            title='Journal.Jabian.com'
            description='The Jabian Journal is a bi-annual journal of articles written by consultants at Jabian. Each print journal is published along side a digital version. My work consisted of working the print art into practical web layouts. I also took all the existing journal issues and articles and reworked the site to make the layout and content management dynamic.'
            img={jabianJournal}
            alt='Jabian Journal Spring 2019 Featured Art'
            url='https://journal.jabian.com'
          />
          <PortfolioItem
            title='CorelinkSurgical.com'
            description='Corelink is a medical device manufacturer that produces 3D printed metal spinal implants. I developed a site centered around their technology and products. It has a immersive interface that is thoroughly organized with dynamically generally content that was built to be easily managed by the client.'
            img={corelink}
            alt='Corelink Spine Wireframe'
            url='https://corelinksurgical.com'
          />
          <PortfolioItem
            title='JointActiveSystems.com'
            description='Joint Active Systems, or JAS, is a medical device manufacturer that makes range of motion devices for patients. I created a site to help them better communicate with customers by creating a dynamic home page that shows off multiple types of content including new blog posts, events, announcements, and products. The site was built with the intent of helping the client more easily update and add product features, images, and documents.'
            img={jas}
            alt='Joint Acitve Systems Product Model'
            url='https://jointactivesystems.com'
          />
          <PortfolioItem
            title='CompassHealthNetwork.org'
            description='Compass Health Network is an organization offering health clinics across Missouri to give patients easier access to necessary services. Together, we built their site with patient access in mind, making services easier to find. To help patients find locations more easily I built a responsive AJAX loading location, finder utilizing the Wordpress REST API.'
            img={compass}
            alt='Compass Health Network Patients'
            url='https://compasshealthnetwork.com'
          />
          <PortfolioItem
            title='UnitedWay.Monsanto.com'
            description='Every year Bayer/Monsanto host a campaign for their Saint Louis based employees through The United Way. Their previous site lacked character and branding and was only manageable through their tech team. We incorporated a new user interface with Bayer brand standards. The home page served and a campaign dashboard, including an easily updateable campaign donation bar. Site admins can also use a straightforward interface to create and update events and approve user submitted “Why I support the United Way” stories.'
            img={bayer}
            alt='Bayer United Way Smiling Girl'
            url='https://unitedway.monsanto.com'
          />
          <PortfolioItem
            title='EliasLLC.com'
            description='Elias received a heavy rebrand that focuses on whistleblower law. I delivered a new content rich website that focused on reorganizing their content with a well structured site map and features an optimized SVG based CSS animation on the home page, a custom styled HTML5 video player, and pages of semantically optimized HTML law documents.'
            img={elias}
            alt='Elias - Thinking About Blowing the Whistle'
            url='https://eliasllc.com'
          />
          <PortfolioItem
            title='DuoDogs.org'
            description='Duo Dogs is a national not-for-profit organization that trains and matches service dogs with people. I developed their new site to match their new printed communication materials that focus on their services and outreach. They received 5 branded service pages along with a concisely templated website to help make management and access easier for their employees and volunteers.'
            img={duo}
            alt='DuoDogs Paw Heart'
            url='https://duodogs.org'
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
