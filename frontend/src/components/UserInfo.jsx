import React from 'react';
import styled from 'styled-components';

import UserImage from '../assets/user.png';

const UserInfoStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  min-height: 100%;
  max-height: 100%;
  border-left: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
  }

  .meta {
    align-items: stretch;

    p {
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }
  }
`;

const UserInfo = ({ user }) => {
  const {
    id,
    firstName,
    lastName,
    image,
    phone,
    mobile,
    location,
    email,
  } = user;

  return (
    <UserInfoStyles>
      <h2>User Details</h2>
      <img src={image || UserImage} alt="user profile" />
      <div className="meta">
        <p>Name: {`${firstName} ${lastName}`}</p>
        <p>email: {email}</p>
        <p>Phone No: {phone}</p>
        <p>Mobile No: {mobile}</p>
        <p>location: {location}</p>
      </div>
    </UserInfoStyles>
  );
};

export default UserInfo;
