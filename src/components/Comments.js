import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CommentsWrapper = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const CommentForm = styled.form`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accentColorHover};
  }
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CommentAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CommentContent = styled.p`
  margin-bottom: 0;
`;

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    // Fetch comments for the post
    // This is where you'd typically make an API call
    // For now, we'll use mock data
    setComments([
      { id: 1, author: 'John Doe', content: 'Great article!' },
      { id: 2, author: 'Jane Smith', content: 'Very informative, thanks for sharing.' },
    ]);
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the new comment to your API
    // For now, we'll just add it to the local state
    const comment = {
      id: comments.length + 1,
      ...newComment,
    };
    setComments([...comments, comment]);
    setNewComment({ author: '', content: '' });
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
        <Textarea
          placeholder="Your comment"
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          required
        />
        <SubmitButton type="submit">Post Comment</SubmitButton>
      </CommentForm>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;