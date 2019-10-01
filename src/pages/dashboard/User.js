import React from 'react';
import { Route } from 'react-router-dom';
import styles from 'styled-components';
import SideBar from '../../components/sidebar';
import UserProfile from './userProfile';
import { withRouter } from 'react-router-dom';
import UserProfileContext from '../../utils/UserProfileContext';

const UserDashboard = ({ links, history }) => {
  const { firstName } = history.location.state.user;

  const handClick = event => {
    console.log(event);
  };
  return (
    <Container>
      <SideBar links={links} />
      <MainSection>
        <MainSectionHeader>
          <div>
            <h3>my dashboard</h3>
            <p>welcome to 360 health insurance user portal</p>
          </div>
          <div className="dashboard-profile">
            <span className="dashboard-profile-avater">{firstName.charAt(0)}</span>
            <span>hello {firstName}</span>
            <span className="dashboard-profile-dropdown" onClick={handClick}></span>
          </div>
        </MainSectionHeader>
        <MainSectionBody>
          <UserProfileContext.Provider value={history.location.state}>
            <Route exact path="/dashboard" component={UserProfile} />
            {/* <Route path="/dashboard/add" component={DesktopAddPost} /> */}
            {/* <Route path="/dashboard/stats" component={DesktopStats} /> */}
          </UserProfileContext.Provider>
        </MainSectionBody>
      </MainSection>
    </Container>
  );
};

UserDashboard.defaultProps = {
  links: [
    {
      name: 'my dashboard',
      path: '/dashboard',
      icon: 'mdi mdi-view-dashboard'
    },
    {
      name: 'all hospitals',
      path: '/dashboard/hospitals',
      icon: 'mdi mdi-hospital-marker'
    },
    {
      name: 'account',
      path: '/dashboard/account',
      icon: 'mdi mdi-account'
    }
  ],
  user: {
    firstName: 'Tolu'
  }
};

const Container = styles.section`
height: 100vh;
display: flex;

`;

const MainSection = styles.section`
  flex: 1
  padding: 2rem;

`;

const MainSectionHeader = styles.section`
  display: flex;
  justify-content: space-between;

  h3 {
    height: 18px;
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #51575e;
    text-transform: capitalize
}

p{
  height: 11px;
  font-family: Avenir-Roman;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #9b9fa3;
}

.dashboard-profile {
  display: flex;
  align-items: center;


  span {
    margin: 7px;
    height: 11px;
    font-family: Avenir-Roman;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #51575e;
    text-transform: capitalize;
  }

  .dashboard-profile-avater {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    opacity: 0.9;
    font-weight: 900;
    font-size: 1.3rem;
    color: #fff;
    background: #89caf0
  }

  .dashboard-profile-dropdown {
    border-bottom: 2px #51575e solid;
    border-right: 2px #51575e solid;    
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    cursor: pointer
  }
}
`;

const MainSectionBody = styles.main`
  margin-top: 1rem;
  height: 90%;
  border-radius: 12px;
  background-color: #f8f9fa;
`;

export default withRouter(UserDashboard);
