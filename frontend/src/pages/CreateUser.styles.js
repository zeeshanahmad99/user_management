import styled from 'styled-components';

export const FieldSetStyles = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;

export const FormStyles = styled.form`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 60px;
`;

export const ProfileImageContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;

  p {
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #ccc;
    padding: 0.5rem;
  }
`;

export const UserInfo = styled.div`
  padding: 2rem 1rem;
  margin-top: 1rem;
  border-top: 1px solid #aaa;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;

  .input-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    input {
      margin-top: 0.5rem;
      padding: 0.5rem;
      font-size: inherit;
      outline: none;
      font-family: inherit;
      border-radius: 0.3em;
      border: 1px solid black;
    }

    input:focus {
      border: 1px solid hsl(200, 100%, 50%);
    }
  }

  .action-buttons {
    display: flex;

    button {
      margin-right: 0.5rem;
    }

    button:last-child {
      margin-right: 0;
    }
  }
`;
