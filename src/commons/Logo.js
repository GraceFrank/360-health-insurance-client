import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

const Logo = ({ tailSize, headSize, centerSize, padding, alignment }) => {
  return (
    <Link to='/'>
      <Container padding={padding} alignment={alignment}>
        <LogoHolder>
          <OvalTail tailSize={tailSize} />
          <OvalHead headSize={headSize}>
            <OvalCenter centerSize={centerSize} />
          </OvalHead>
        </LogoHolder>
        <LogoText>
          <span>60</span>
        </LogoText>
        <InsuranceText>
          <span>health insurance</span>
        </InsuranceText>
      </Container>
    </Link>
  );
};

const OvalTail = styles.div`
   width: ${props => `${props.tailSize}px`};
   height: ${props => `${props.tailSize}px`};
   border-radius: 100%;
   background-image: linear-gradient(149deg, #084063, #0f7bc0);
`;

const OvalHead = styles.div`
  width: ${props => `${props.headSize}px`};
  height: ${props => `${props.headSize}px`};
  background-image: linear-gradient(325deg, #084063 35%, #0f7bc0 66%, #89caf0);
  border-radius: 100%;
  margin-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const OvalCenter = styles.div`
  width: ${props => `${props.centerSize}px`};
  height: ${props => `${props.centerSize}px`};
  border-radius: 100%;
  background: #fff;

`;

const LogoText = styles.span`
margin-top: auto;

span {
  margin-right: 5px;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(325deg, #084063 35%, #0f7bc0 66%, #89caf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const Container = styles.section`
  display: flex;
  padding: ${props => `${props.padding}px`};
  justify-content: ${props => props.alignment};
`;

const LogoHolder = styles.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsuranceText = styles.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-right: 5px;
  padding-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: capitalize
  color: #084063
`;

Logo.defaultProps = {
  tailSize: 15,
  headSize: 45,
  centerSize: 23,
  padding: 14,
  alignment: 'flex-start'
};

export default Logo;
