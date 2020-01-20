import React, { useState } from 'react';
import styles from 'styled-components';
import NavBar from '../../commons/NavBar';
import CustomInput from '../../components/input';
import CustomButton from '../../components/button';
import CustomSelect from '../../components/select';
import PayStackModal from '../../components/payStackModal';

export default function Register({ inputFields, selectFields }) {
  const userData = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    otherName: '',
    phone: '',
    lga: '',
    age: '',
    gender: '',
    address: '',
    paymentType: '',
    plan: '',
    town: ''
  };
  let amount = 1500;

  const [fields, setField] = useState(userData);
  const [buttonAction, setButtonAction] = useState({
    amount: 1500,
    agreeToTerms: true,
    openModal: false
  });

  const handleChange = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    setField({ ...fields });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setButtonAction({ ...buttonAction, openModal: true });
  };

  const calculatePlanAmount = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    if (target.value === 'monthly') amount = 1500;
    if (target.value === 'quaterly') amount = 1500 * 3;
    if (target.value === 'annually') amount = 1500 * 12;

    setButtonAction({ ...buttonAction, amount });
    setField({ ...fields });
  };

  const handleAgreement = ({ target }) => {
    setButtonAction({ ...buttonAction, agreeToTerms: !target.checked });
  };

  return (
    <>
      <NavBar />
      <Container>
        <h2>Let's get to know you</h2>
        <h3>NOTE: All fields are required.</h3>

        <FormWrapper onSubmit={handleSubmit}>
          {inputFields.map((field, i) => (
            <CustomInput {...field} onChange={handleChange} margin={1} key={i} />
          ))}
          <div className="form-wrapper-options">
            <select onChange={handleChange} name="lga">
              <CustomSelect option="Select LGA" value="0" />
              {selectFields.LGA.map((data, i) => (
                <CustomSelect option={data} key={i} />
              ))}
            </select>
            <select onChange={handleChange} name="gender">
              <CustomSelect option="Select Gender" value="0" />
              {selectFields.gender.map((data, i) => (
                <CustomSelect option={data} key={i} />
              ))}
            </select>
          </div>
          <div className="form-wrapper-options">
            <select onChange={handleChange} name="plan">
              <CustomSelect option="Select Plan" value="0" />
              {selectFields.plan.map((data, i) => (
                <CustomSelect option={data} key={i} />
              ))}
            </select>
            <select onChange={calculatePlanAmount} name="paymentType">
              <CustomSelect option="Select PaymentType" value="0" />
              {selectFields.payment.map((data, i) => (
                <CustomSelect option={data} key={i} />
              ))}
            </select>
          </div>
          <input type="checkbox" className="agree-to-terms" onChange={handleAgreement} />
          <span>I agree to 360 Health Insurance Retail plan terms and conditions</span>
          <CustomButton
            name={`Pay ₦${buttonAction.amount}.00 now`}
            bgColor="#a9a9a9"
            id="loginButton"
            disable={buttonAction.agreeToTerms}
          />
          <PayStackModal
            amount={buttonAction.amount}
            openModal={buttonAction.openModal}
            payload={fields}
          />
        </FormWrapper>
      </Container>
    </>
  );
}

Register.defaultProps = {
  inputFields: [
    {
      type: 'text',
      name: 'firstName',
      placeholder: 'first name'
    },
    {
      type: 'text',
      name: 'lastName',
      placeholder: 'last name'
    },
    {
      type: 'text',
      name: 'otherName',
      placeholder: 'other names'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'email address'
    },
    {
      type: 'number',
      name: 'phone',
      placeholder: 'phone number'
    },
    {
      type: 'text',
      name: 'address',
      placeholder: 'your address'
    },
    {
      type: 'text',
      name: 'town',
      placeholder: 'your town'
    },
    {
      type: 'number',
      name: 'age',
      placeholder: 'how old are you'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'password'
    }
  ],
  selectFields: {
    gender: ['female', 'male'],
    plan: ['individual', 'family'],
    payment: ['monthly', 'quaterly', 'annually'],
    LGA: ['YELGA', 'SILGA', 'KOLGA', 'SALGA', 'BALGA', 'OLGA', 'NLGA', 'ELGA']
  }
};

const Container = styles.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2, h3 {
    font-family: Avenir-Roman;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #3a3e42;
  }

  h2{
    font-weight: 900;
  }
  

`;

const FormWrapper = styles.form`
  width: 25%;

.form-wrapper-options {
  display: flex !important;
  justify-content: space-between !important;
  margin: 15px 0;

  select {
    border: 1px solid #89caf0;
    height: 30px;
    width: 45%;
  }

}

.agree-to-terms {
  width: 15px;
  height: 15px;
  margin-right: 10px
}

`;
