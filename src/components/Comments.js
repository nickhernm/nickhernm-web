import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CommentsWrapper = styled.div`
  margin-top: 2rem;
`;

const CommentForm = styled.form`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
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
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comments/${postId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/comments', {
        postId,
        author: newComment.author,
        content: newComment.content
      });
      setNewComment({ author: '', content: '' });
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <CommentsWrapper>
      <h3>Comments</h3>
      <CommentForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your name"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          required
        />
        <CommentInput
          placeholder="Your comment"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          required
        />
        <button type="submit">Post Comment</button>
      </CommentForm>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment._id}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
            <small>{new Date(comment.createdAt).toLocaleString()}</small>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;