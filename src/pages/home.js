import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <Greeting>Welcome to your phonebook!</Greeting>
      <Description>Here you can keep your contacts and work with them</Description>
    </>
  );
};

export default HomePage;

const Greeting = styled.h1`
  margin-top: 200px;
  margin-bottom: 0;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  color: #94255d;
`;
const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 0;

  color: #94255d;
`;
