import React, { useEffect, useState, useCallback } from 'react';
import CommentForm from './CommentForm';
import {
  Li,
  Header,
  Icon,
  Like,
  Contents,
  FeedImage,
  IconList,
  UserName,
  Nickname,
  Comment,
} from './style';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiHeart, FiSend, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Feed = ({ feed }) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState(feed.comments);

  const addComment = useCallback(comment => {
    setComments(comments => {
      const updated = [...comments];
      updated.push(comment);
      return updated;
    });
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = feed.src;
    image.onload = () => {
      setLoading(false);
    };
  }, [feed.src]);

  return loading ? null : (
    <Li>
      <Header>
        <UserName>{feed.nickname}</UserName>
        <Icon>
          <HiOutlineDotsHorizontal />
        </Icon>
      </Header>
      <Contents>
        <FeedImage src={feed.src} />
        <IconList>
          <Icon>
            <FiHeart />
          </Icon>
          <Icon>
            <FaRegComment />
          </Icon>
          <Icon>
            <FiSend />
          </Icon>
          <Icon>
            <FiBookmark />
          </Icon>
        </IconList>
        <Like>좋아요 {feed.like}개</Like>
        {comments.map((comment, idx) => (
          <Comment key={idx} comment={comment}>
            <Nickname>{comment.nickname}</Nickname>
            <p>{comment.content}</p>
          </Comment>
        ))}
        <CommentForm addComment={addComment} />
      </Contents>
    </Li>
  );
};

export default Feed;
