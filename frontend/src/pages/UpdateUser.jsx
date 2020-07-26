import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import UserImage from '../assets/user.png';
import { updateUser, uploadImage, getUser } from '../api';
import Error from '../components/Error';

import {
  FieldSetStyles,
  FormStyles,
  ProfileImageContainer,
  UserInfo,
} from './CreateUser.styles';

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const [fetchedUser, setFetchedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data, error } = await getUser(id);
      if (error) return setError(error);

      setFetchedUser(data);
    })();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      return setError('Passwords should match');
    }

    let refinedUser = { ...user };
    delete refinedUser.confirmPassword;

    setLoading(true);
    const { error } = await updateUser(refinedUser, id);
    setError(error);
    setLoading(false);
    if (!error) {
      history.push('/');
      setUser({});
      setError(null);
    }
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'user_management');

    setIsUploading(true);
    const { image, error } = await uploadImage(data);
    setIsUploading(false);
    if (error) setError(error);
    setUser({ ...user, image });
  };

  const handleReset = () => {
    const resetUser = { ...fetchedUser };
    delete resetUser.image;
    setUser(resetUser);
  };

  return (
    <FieldSetStyles aria-busy={loading} disabled={loading}>
      <FormStyles onSubmit={handleSubmit}>
        <ProfileImageContainer className="profile-image-container">
          <img
            className="profile-image"
            src={user.image || fetchedUser.image || UserImage}
            alt="profile"
          />
          {isUploading && <p>Uploading Image...</p>}
          {!isUploading && !user.image && (
            <>
              <p>Upload a different photo...</p>
              <input
                type="file"
                onChange={handleUploadImage}
                accept={'image/*'}
              />
            </>
          )}
        </ProfileImageContainer>
        <UserInfo className="user-info">
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              defaultValue={fetchedUser.firstName}
              onChange={handleChange}
              placeholder="First Name"
              id="firstName"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              defaultValue={fetchedUser.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              id="lastName"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={fetchedUser.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              id="phone"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              defaultValue={fetchedUser.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              id="mobile"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={fetchedUser.email}
              onChange={handleChange}
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={fetchedUser.location}
              onChange={handleChange}
              placeholder="Location"
              id="location"
              required
            />
          </div>
          {/* <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              id="confirmPassword"
              required
            />
          </div> */}
          <div className="action-buttons">
            <button className="primary-button" type="submit">
              Updat{loading ? 'ing' : 'e'}
            </button>
            <button
              onClick={handleReset}
              className="secondary-button"
              type="reset"
            >
              Reset
            </button>
          </div>
          {error && <Error error={error} />}
        </UserInfo>
      </FormStyles>
    </FieldSetStyles>
  );
};

export default UpdateUser;
