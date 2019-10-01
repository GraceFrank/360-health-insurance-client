import React from 'react';
import styles from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Footer = ({ socialLinks }) => {
  return (
    <FooterContainer>
      <Grid columns="equal" verticalAlign="middle" textAlign="center">
        <Grid.Column>
          <CopyRight>&copy; 2019 360 health insurance. All rights reserved</CopyRight>
        </Grid.Column>
        <Grid.Column>
          <FollowUs>
            {socialLinks.map(({ link, icon }, i) => (
              <Link
                to={link}
                key={i}
                style={{ fontSize: '1.5rem', color: '#333', margin: '0 25px' }}
                className="socialLink"
              >
                <i className={icon}></i>
              </Link>
            ))}
          </FollowUs>
        </Grid.Column>
      </Grid>
    </FooterContainer>
  );
};

const CopyRight = styles.p`
   text-transform: capitalize;
   text-align: start;

   @media only screen and (max-width: 600px) {
      font-size: 11px;
      width: 250px;
    }

    @media only screen and (max-width: 320px) {
      font-size: 8px;
      width: 180px;
    } 
`;

const FollowUs = styles.div`
@media only screen and (max-width: 600px) {
      text-align: right;  
    }

    @media only screen and (max-width: 320px) {
      width: 100% !important;
    } 
`;

const FooterContainer = styles.footer`
    padding: 3.5rem;
    background-color: #F2F2F2;

    @media only screen and (max-width: 600px) {
      padding: 2.5rem 0.7rem;

      .socialLink {
        font-size: 1.2rem !important;     
        margin: 0px 5px !important;
      }
    }

    @media only screen and (max-width: 320px) {
      padding: 2rem 0.7rem;

      .socialLink {
          font-size: 0.7rem !important;     
          margin: 0px 4px !important;
      }
    } 
`;

Footer.defaultProps = {
  socialLinks: [
    {
      link: '/',
      icon: 'fa fa-facebook'
    },
    {
      link: '/',
      icon: 'fa fa-twitter'
    },
    {
      link: '/',
      icon: 'fa fa-linkedin'
    },
    {
      link: '/',
      icon: 'fa fa-instagram'
    }
  ]
};

export default Footer;
