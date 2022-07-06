import React, { useCallback, useRef, useState } from 'react';
import { Form, CommentInput, Button } from '../../styles/commentFormStyle';

const CommentForm = ({ addComment }) => {
  const [isActive, setIsActive] = useState(false);
  const commentRef = useRef('');

  const handleChangeComment = useCallback(e => {
    if (commentRef.current.value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (!isActive) {
        return;
      }

      addComment({ nickname: 'hello123', content: commentRef.current.value });
      commentRef.current.value = '';
      setIsActive(false);
    },
    [isActive, addComment]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <CommentInput
        ref={commentRef}
        placeholder="댓글달기..."
        onChange={handleChangeComment}
      />
      <Button isActive={isActive}>게시</Button>
    </Form>
  );
};

export default CommentForm;
