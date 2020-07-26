import React from 'react';
import styled from 'styled-components';

const MessageStyles = styled.div`
  border-left: 5px solid hsl(0, 100%, 50%);
  display: flex;
  align-items: center;
  padding-left: 3%;
`;

const Error = ({ error }) => {
  return <MessageStyles>{error}</MessageStyles>;
};

export default Error;
