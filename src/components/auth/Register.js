import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${props => props.error ? 'red' : 'green'};
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    try {
      const success = await register(username, email, password);
      if (success) {
        setMessage('Registration successful! Redirecting...');
        setTimeout(() => {
          navigate('/');  // Redirect to home page after successful registration
        }, 2000);
      } else {
        setError(true);
        setMessage('Registration failed. Please try again.');
      }
    } catch (err) {
      setError(true);
      if (err.response && err.response.data && err.response.data.msg) {
        setMessage(err.response.data.msg);
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Register</Button>
      {message && <Message error={error}>{message}</Message>}
    </Form>
  );
};

export default Register;