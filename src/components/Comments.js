import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-top: 2rem;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const CommentInput = styled.textarea`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

const CommentButton = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  cursor: pointer;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 4px;
`;

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const res = await api.get(`/comments/${postId}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/comments', { post: postId, content: newComment });
      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CommentWrapper>
      <h3>Comments</h3>
      {user && (
        <CommentForm onSubmit={handleSubmit}>
          <CommentInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <CommentButton type="submit">Post Comment</CommentButton>
        </CommentForm>
      )}
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment._id}>
            <strong>{comment.user.username}</strong>
            <p>{comment.content}</p>
          </CommentItem>
        ))}
      </CommentList>
    </CommentWrapper>
  );
};

export default Comments;