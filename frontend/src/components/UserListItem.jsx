import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import UserImage from '../assets/user.png';

const UserListItemStyles = styled.div`
  margin-bottom: 0.5rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.3em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  }

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    padding: 5px;
    border: 1px solid #aaa;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  .user-meta {
    flex-grow: 1;

    h4 {
      margin: 0;
    }

    p {
      margin: 0;
      margin-top: 5px;
    }
  }
`;

const UserListItem = ({ user, handleUserChange, handleDelete }) => {
  const { id, firstName, lastName, image, email } = user;
  const history = useHistory();

  return (
    <UserListItemStyles onClick={() => handleUserChange(id)}>
      <img src={image || UserImage} alt="user profile" />
      <div className="user-meta">
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{email}</p>
      </div>
      <div className="action-buttons">
        <button onClick={() => handleDelete(id)} className="danger-button">
          Delete
        </button>
        <button
          onClick={() => history.push(`/update_user/${id}`)}
          className="primary-button"
          style={{ marginLeft: '5px' }}
        >
          Update
        </button>
      </div>
    </UserListItemStyles>
  );
};

export default UserListItem;
