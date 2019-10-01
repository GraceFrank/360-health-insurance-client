import React from 'react';
import { Modal } from 'semantic-ui-react';
import PaystackButton from 'react-paystack';
import { withRouter } from 'react-router-dom';
import axiosQueries from '../queries/';

const PayStackModal = ({ amount, openModal, payload, history }) => {
  console.log('payloadpayloadpayloadpayload', { payload });

  const {
    email,
    password,
    firstName,
    lastName,
    otherName,
    phone,
    lga,
    age,
    gender,
    address,
    paymentType,
    plan
  } = payload;

  const userPayload = {
    email,
    password,
    firstName,
    lastName,
    otherName,
    phone,
    lga,
    age,
    gender,
    address,
    town: 'default',
  };
  const callback = async response => {
    const user = await axiosQueries.Post('users/', userPayload)
      .then(res => {

      })
      .catch(error => {

      })

    // const planPayLoad = {
    //   userId: user._id,
    //   plainId: plan,
    //   price: `${amount}`,
    //   paymentType
    // };

    console.log({ user });

    // const planSub = await fetch('https://health-insurance-backend.herokuapp.com/api/subs', {
    //   method: 'POST',
    //   body: JSON.stringify(planPayLoad)
    // });

    history.replace('login');
  };

  const close = () => {
    console.log('Payment closed');
  };

  const getReference = () => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';
    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  return (
    <Modal open={openModal} className="paystack-modal">
      <Modal.Content>
        <PaystackButton
          text="Make Payment"
          className="payButton"
          callback={callback}
          close={close}
          disabled={true}
          embed={true}
          reference={getReference()}
          email={'teneeto@gmail.com'}
          amount={+`${amount}00`}
          paystackkey="pk_test_356560ec5f54abb38bb0821e54f9333a17e21da4"
          tag="button"
        />
      </Modal.Content>
    </Modal>
  );
};

export default withRouter(PayStackModal);
