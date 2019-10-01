import React from 'react';
import styles from 'styled-components';

const AccountCard = ({ bill }) => {
  const { name, paymentType, price } = bill;
  return (
    <Container>
      <h2>Subscription details</h2>
      <div className="subscription-plan">
        <span>plan type</span>
        <span id="subscription-amount">{name}</span>
      </div>
      <div className="subscription-payment">
        <div>
          <h3>payment type</h3>
          <h4>{paymentType}</h4>
        </div>
        <span>#{price}</span>
      </div>
    </Container>
  );
};

const Container = styles.section`
      height: 30%;
      border-radius: 12px;
      box-shadow: 0 14px 23px 4px rgba(0, 0, 0, 0.03);
      background-color: #ffffff;
      padding: 3rem;
      text-transform: capitalize;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.3px;

      h2 {
            font-family: Avenir;
            font-size: 15px;
            font-weight: 900;
            color: #51575e;
            margin-bottom: 3rem
      }

      .subscription-plan {
            display: flex;
            justify-content: space-between;
            font-family: Avenir-Roman;
            font-size: 10px;
            font-weight: 700;
            color: #51575e;

            #subscription-amount {
                  height: 20px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  padding: 4px 6px;
                  border-radius: 50px;
                  background-image: linear-gradient(156deg, #0f7bc0, #89caf0);
                  color: #fff;
                  font-weight: 900
            }
      }

      .subscription-payment {
            margin-top: 3rem;
            display: flex;
            justify-content: space-between;
            font-family: Avenir-Roman;
            font-size: 10px;
            font-weight: 700;
            color: #51575e;

            h3, h4 {
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 0;
            }
            
            h4 {
            margin-top: 6px; 
            color: #9b9fa3;
            }

            span {
                  height: 15px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50px;
                  background-image: linear-gradient(156deg, #0f7bc0, #89caf0);
                  color: #fff;
                  font-weight: 900;
                  padding: 4px 6px;
            }
      }

`;

export default AccountCard;
