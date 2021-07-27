import React from 'react';
import styled from 'styled-components';

import CommentBox from './CommentBox';

import useInfiniteScroll from '../hooks/useInfiniteScroll';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;
`;

const InfiniteScrollList = () => {
  const { loading, commentList, sentinelRef } = useInfiniteScroll();

  return (
    <Container>
      {commentList.map((comment) => (
        <CommentBox key={comment.id} comment={comment} />
      ))}
      <div ref={sentinelRef}>{loading && 'Loading...'}</div>
    </Container>
  );
};

export default InfiniteScrollList;
