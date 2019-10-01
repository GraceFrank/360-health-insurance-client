import React from 'react';
import styles from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../commons/Logo';

const SideBar = ({ links }) => {
  return (
    <Container>
      <div>
        <Link to="/dashboard">
          <Logo />
        </Link>
      </div>
      <SideBarIcons>
        {links.map((link, i) => (
          <span className="icon-contanier" key={i}>
            <NavLink key={i} exact to={link.path} activeClassName="activeNav">
              <i className={link.icon} style={{ fontSize: '25px' }} />
            </NavLink>
            <span>{link.name}</span>
          </span>
        ))}
      </SideBarIcons>
    </Container>
  );
};

const Container = styles.section`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SideBarIcons = styles.section`
 height: 25%;
 width: 70%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin-top: 3rem;


 .icon-contanier {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      height: 40px;
      border-radius: 5px;
      padding-left: 10px
 }

 a {
    display: flex;
    align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 15px;
      color: #66717a;
      margin-right: 1.5rem;
    }

    .activeNav {
      .icon-contanier {
       background: #0f7bc0;
       color: #fff;
       transition: 0.3s ease-in-out all;
       font-weight: 600
      }
    }

    .icon-contanier:hover {
      a {
        color: #fff;
      }
      cursor: pointer;
      background: #0f7bc0;
      color: #fff;
      transition: 0.3s ease-in-out all;
      font-weight: 600
    }
`;

export default SideBar;
