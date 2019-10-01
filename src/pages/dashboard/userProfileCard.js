import React from 'react';
import styles from 'styled-components';
import constructProfileLabels from '../../utils/constructUserProfileLabels';

const UserProfileCard = ({ user }) => {
  const { firstName } = user;
  const userLabels = constructProfileLabels(user);
  return (
    <Card>
      <div className="profile-header">
        <h3>my profile</h3>
        <div>
          <p>last login: {new Date().toUTCString().substr(5, 17)}</p>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-avatar">
          <span>{firstName.charAt(0)}</span>
        </div>
        <div className="profile-details">
          {userLabels.map(({ label, value }, i) => (
            <div key={i}>
              <label>{label}</label>
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Card = styles.section`
      flex: 1;
      margin: 3rem 2rem;
      border-radius: 12px;
      box-shadow: 0 14px 23px 4px rgba(0, 0, 0, 0.03);
      background-color: #ffffff;
      font-family: Avenir;
      color: #51575e;

      .profile-header {
        height: 70px;
        padding: 2rem;
        text-transform: capitalize;
      }

      .profile-body {

        .profile-avatar {
          text-align: center;

          span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 50px
            background-color: #89caf0;
            font-weight: 900;
            font-size: 3rem;
            color: #fff;
          }
        }

        .profile-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 1rem;

          div {
            width: 34.5%;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.3px;
            padding: 5px 2rem;
            padding-left: 4rem;

            label {
              font-size: 9px;
              font-weight: 900;
            } 
              h3 {
              margin-top: 5px;
              width: 150px;
              font-family: Avenir-Roman;
              font-size: 10px;
              color: #51575e;
              padding-bottom: 8px;
              border-bottom: 2px #f1f4f7 solid;
              }
          }
        }
      }
`;

export default UserProfileCard;
