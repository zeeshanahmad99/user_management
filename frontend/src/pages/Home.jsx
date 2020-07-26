import React, { useState, useEffect } from 'react';

import { getAllUsers, deleteUser } from '../api';
import UsersList from '../components/UsersList';
import UserInfo from '../components/UserInfo';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const selectedUser = users.find((user) => user.id === userId);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await getAllUsers();
      setLoading(false);
      if (error) setError(error);
      setUsers(data);
    })();
  }, []);

  const handleUserChange = (id) => setUserId(id);

  const handleDelete = async (id) => {
    const prevUsers = users;
    setUsers(users.filter((user) => user.id !== id));
    const { error } = await deleteUser(id);

    if (error) {
      setUsers(prevUsers);
      setError(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <UsersList
        users={users}
        handleDelete={handleDelete}
        handleUserChange={handleUserChange}
      />
      {selectedUser && <UserInfo user={selectedUser} />}
    </>
  );
};

export default Home;
