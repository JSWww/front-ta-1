import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  width: 500px;
  padding: 20px;
  margin-bottom: 12px;

  & > :last-child {
    margin-top: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Title = styled.div`
  color: #212529;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  margin-right: 12px;
`;

const Content = styled.span`
  display: inline-block;
  color: #212529;
  font-size: 18px;
  line-height: 21px;
`;

const CommentBox = ({ comment }) => (
  <Container>
    <Row>
      <Title>Comment Id</Title>
      <Content>{comment.id}</Content>
    </Row>
    <Row>
      <Title>Email</Title>
      <Content>{comment.email}</Content>
    </Row>
    <Title>Comment</Title>
    <Content>{comment.body}</Content>
  </Container>
);

export default CommentBox;
