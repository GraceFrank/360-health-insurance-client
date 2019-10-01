import React from 'react';
import styles from 'styled-components';

const BillCard = ({ type, address, name, town }) => {
  return (
    <Container>
      <h2>details of hospital</h2>
      <div className="hospital-type">
        <div>
          <h3>name</h3>
          <h4>{type}</h4>
        </div>
        <span>{name}</span>
      </div>
      <div className="hospital-location">
        <div>
          <h3>address</h3>
          <h4>{town}</h4>
        </div>
        <span>{address}</span>
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

      h3, h4 {
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 0;
            }
            
            h4 {
            margin-top: 6px; 
            color: #9b9fa3;
            }

      .hospital-type {
            display: flex;
            justify-content: space-between;
            font-family: Avenir-Roman;
            font-size: 10px;
            font-weight: 900;
            color: #51575e;

            span {
                  height: 15px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50px;
                  font-weight: 900;
                  padding: 4px 6px;
            }
      }

      .hospital-location {
            margin-top: 3rem;
            display: flex;
            justify-content: space-between;
            font-family: Avenir-Roman;
            font-size: 10px;
            font-weight: 700;
            color: #51575e;

            span {
                  height: 15px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50px;
                  font-weight: 900;
                  padding: 4px 6px;
            }
      }

`;

export default BillCard;
