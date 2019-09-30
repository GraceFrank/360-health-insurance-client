import React from 'react';
import styles from 'styled-components';

export default ({ onChange, placeholder, value, name, type, id }) => (
  <CustomInput
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    name={name}
    type={type}
    id={id}
  />
);

const CustomInput = styles.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: 1px solid #89caf0;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: capitalize
  `;
