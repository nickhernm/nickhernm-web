import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-right: 2.5rem;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const StrengthMeter = styled.div`
  height: 5px;
  background-color: ${props => {
    if (props.strength === 'strong') return 'green';
    if (props.strength === 'medium') return 'yellow';
    return 'red';
  }};
  transition: all 0.3s ease;
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    if (password !== confirmPassword) {
      setError(true);
      setMessage('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    try {
      const success = await register(formData);
      if (success) {
        setMessage('Registration successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
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
      <InputWrapper>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PasswordToggle type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordToggle>
      </InputWrapper>
      <StrengthMeter strength={checkPasswordStrength(password)} />
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </InputWrapper>
      <Button type="submit">Register</Button>
      <ImageUpload>
        <label htmlFor="profileImage">Profile Image:</label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ImageUpload>
      <Button type="submit">Register</Button>
      {message && <Message error={error}>{message}</Message>}
    </Form>
  );
};

export default Register;