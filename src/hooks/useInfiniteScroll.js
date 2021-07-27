import { useState, useEffect, useRef } from 'react';

import commentAPI from '../apis/commentAPI';

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const sentinelRef = useRef(null);

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
        if (entry.isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      });
    });

    observer.observe(sentinelRef.current);

    const sentinelRefValue = sentinelRef.current;

    return () => {
      observer.unobserve(sentinelRefValue);
    };
  }, [loading]);

  return {
    loading,
    commentList,
    sentinelRef,
  };
};

export default useInfiniteScroll;
