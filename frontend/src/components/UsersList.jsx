import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import UserListItem from './UserListItem';

const UsersListStyles = styled.div`
  width: 50%;
  padding: 1rem;

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const UsersList = ({ users, handleUserChange, handleDelete }) => {
  const history = useHistory();

  return (
    <UsersListStyles>
      <div className="bar">
        <h2>All Users</h2>
        <button
          onClick={() => history.push('/new_user')}
          className="primary-button"
        >
          Create User
        </button>
      </div>
      <div className="list">
        {users.map((user) => (
          <UserListItem
            key={user.id}
            user={user}
            handleUserChange={handleUserChange}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </UsersListStyles>
  );
};

export default UsersList;
