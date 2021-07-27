import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import CommentBox from './CommentBox';

import commentAPI from '../apis/commentAPI';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;
`;

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const sentinelRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await commentAPI.getComments(page);
      setCommentList((prev) => [...prev, ...data]);
      setLoading(false);
    })();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!loading) {
            setPage((prev) => prev + 1);
          }
        }
      });
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    const sentinelRefValue = sentinelRef.current;

    return () => {
      if (sentinelRef) {
        observer.unobserve(sentinelRefValue);
      }
    };
  }, [loading]);

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
