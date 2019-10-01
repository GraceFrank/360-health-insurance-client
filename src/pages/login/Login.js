import React, { useState } from 'react';
import styles from 'styled-components';
import Logo from '../../commons/Logo';
import { CustomInput, CustomButton } from '../../components/index';
import { Link, withRouter } from 'react-router-dom';
import axiosQueries from '../../queries/';

const Login = ({ inputFields, history }) => {
  const [fields, setField] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const name = target.name;
    fields[name] = target.value;
    setField({ ...fields });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const {
      data: { data }
    } = await axiosQueries.Post('login/', fields);

    const { user, subscription, hospital, plan } = data.data;
    const token = data['x-auth-token '];

    history.push({
      pathname: 'dashboard',
      state: { user, subscription, hospital, plan }
    });
  };

  return (
    <Container className="ui one column center aligned grid">
      <LoginForm className="column twelve wide">
        <Link to="/" className="home-logo">
          <Logo padding={0} alignment="center" />
        </Link>
        <FormWrapper onSubmit={handleSubmit}>
          {inputFields.map((field, i) => (
            <CustomInput {...field} key={i} onChange={handleChange} id="loginInput" />
          ))}
          <CustomButton name="log in" bgColor="#a9a9a9" id="loginButton" />
        </FormWrapper>
        <ForgetPassword>
          <span>
            forgot password?
            <Link>click here</Link>
          </span>
        </ForgetPassword>
      </LoginForm>
    </Container>
  );
};

const Container = styles.div`
   height: 100vh;
   margin: 0 !important;

   @media only screen and (min-width: 600px) {
    align-items: center !important;
 }
   
`;

const LoginForm = styles.div`
   margin-top: 1rem !important;
   display: flex !important;
   flex-direction: column;
   justify-content: space-between;

  .home-logo {
    cursor: pointer
  }


  @media only screen and (min-width: 360px) {
    margin-top: 5rem !important;
 }


`;

const FormWrapper = styles.form`
  margin-top: 1.5rem;
  width: 100% !important;

  @media only screen and (min-width: 600px) {
    width: 60% !important;
    margin: auto;
    margin-top: 8rem;

    #loginInput {
      height: 4rem;
    }

    #loginButton {
      height: 4rem;
      font-weight: 550;
    }
  }
  

  @media only screen and (min-width: 1280px) {
    width: 40% !important;
  }

  @media only screen and (min-width: 1440px) {
    width: 30% !important;
  }

`;

const ForgetPassword = styles.div`
  text-transform: capitalize
  font-size: 10px;
  margin-right: auto !important;

  @media only screen and (min-width: 360px) {
    margin-bottom: 8rem !important;
 }

 @media only screen and (min-width: 600px) {
  width: 60% !important;
  margin-top: 5rem;
}

@media only screen and (min-width: 1280px) {
  width: 73% !important;
}

@media only screen and (min-width: 1440px) {
  width: 85% !important;
  font-size: 12px;
}
`;

export default withRouter(Login);

Login.defaultProps = {
  inputFields: [
    {
      type: 'email',
      name: 'email',
      placeholder: 'email address'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'password'
    }
  ]
};
