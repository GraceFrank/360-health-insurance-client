import React from 'react';
import styles from 'styled-components';

export default function select({ option }) {
  return <CustomOption value={option}>{option}</CustomOption>;
}
const CustomOption = styles.option`
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
