import React, { useContext } from 'react';
import styles from 'styled-components';
import UserProfileCard from './userProfileCard';
import BillCard from '../../components/billCard';
import AccountCard from '../../components/accountCard';
import UserProfileContext from '../../utils/UserProfileContext';

const UserProfile = () => {
  const { user, subscription, hospital, plan } = useContext(UserProfileContext);

  return (
    <Container>
      <div className="user-profile-cards">
        <AccountCard bill={{ ...subscription, ...plan }} />
        <BillCard {...hospital} />
      </div>
      <UserProfileCard user={user} />
    </Container>
  );
};

const Container = styles.div`
      height: 100%;
      display: flex;

      .user-profile-cards {
          flex: 0.8;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin: 2rem;
      }

`;

UserProfile.defaultProps = {
  data: {
    user: {
      firstName: 'Tolu',
      lastName: 'James',
      otherName: 'Doe',
      phone: '1234313524677',
      email: 'Tolu@gmail.com',
      lga: 'YELGA',
      town: 'Lurem pseum efio',
      age: 57,
      gender: 'male',
      address: '781 Broome Street, Hollymead, Arizona'
    },
    subscription: {
      paymentType: 'monthly',
      price: 1500
    },
    hospital: {
      type: 'public',
      address: '781 Broome Street, Hollymead, Arizona',
      name: 'consectetur pariatur eiusmod',
      lga: 'SILGA',
      town: 'Arizona'
    },
    plan: {
      name: 'family'
    }
  }
};

export default UserProfile;
