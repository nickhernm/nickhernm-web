import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaUpload, FaUser } from 'react-icons/fa';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accentColor};
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
`;

const StrengthMeter = styled.div`
  height: 5px;
  background-color: ${props => {
    if (props.strength === 'strong') return 'green';
    if (props.strength === 'medium') return 'yellow';
    return 'red';
  }};
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
`;

const StrengthText = styled.span`
  font-size: 0.8rem;
  color: ${props => {
    if (props.strength === 'strong') return 'green';
    if (props.strength === 'medium') return 'orange';
    return 'red';
  }};
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => props.error ? 'red' : 'green'};
`;

const ImageUpload = styled.div`
  margin-bottom: 1rem;
`;

const ImageUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border: 1px dashed ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentColor};
    color: white;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 2px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundAlt};
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultAvatar = styled(FaUser)`
  font-size: 3rem;
  color: ${({ theme }) => theme.secondaryColor};
`;

const checkPasswordStrength = (password) => {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
  const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
  if (strongRegex.test(password)) {
    return 'strong';
  } else if (mediumRegex.test(password)) {
    return 'medium';
  } else {
    return 'weak';
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    if (!emailValid) {
      setError(true);
      setMessage('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setMessage('Passwords do not match');
      return;
    }

    if (passwordStrength === 'weak') {
      setError(true);
      setMessage('Please choose a stronger password');
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
      <Title>Register</Title>
      <ImagePreviewContainer>
        {profileImagePreview ? (
          <ImagePreview src={profileImagePreview} alt="Profile Preview" />
        ) : (
          <DefaultAvatar />
        )}
      </ImagePreviewContainer>
      <ImageUpload>
        <ImageUploadLabel htmlFor="profileImage">
          <FaUpload /> {profileImage ? 'Change Image' : 'Upload Profile Image'}
        </ImageUploadLabel>
        <HiddenFileInput
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
      </ImageUpload>
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
          style={{ borderColor: emailValid ? '' : 'red' }}
        />
        {!emailValid && <Message error>Invalid email format</Message>}
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
      <StrengthMeter strength={passwordStrength} />
      <StrengthText strength={passwordStrength}>
        {passwordStrength ? `Password strength: ${passwordStrength}` : ''}
      </StrengthText>
      <InputWrapper>
        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <PasswordToggle type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordToggle>
      </InputWrapper>
      <Button type="submit">Register</Button>
      {message && <Message error={error}>{message}</Message>}
    </Form>
  );
};

export default Register;