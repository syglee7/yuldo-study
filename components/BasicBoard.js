import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const BasicBoard = () => {
  const [contents, setContents] = useState([]);

  const getPost = async () => {
    let boardList = await axios.get("http://localhost:3060/post");
    setContents(boardList.data);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Category>구분</Category>
        <TextTitle>글제목</TextTitle>
        <IconContainer>작성일</IconContainer>
        <IconContainer>좋아요</IconContainer>
      </TitleContainer>
      <ContentsContainer>
        {contents
          ? contents.map((item, index) => (
              <div key={index + item.date}>
                <CategoryContent>{item.category}</CategoryContent>
                <TitleContent>
                  {item.title}
                  <span>[{item.comment_count}]</span>
                </TitleContent>
                <IconContent>{item.date}</IconContent>
                <IconContent>{item.like}</IconContent>
              </div>
            ))
          : "내용이 없습니다."}
      </ContentsContainer>
    </Container>
  );
};

export default BasicBoard;

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  color: #1e1e1e;
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #1e1e1e;
  height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Category = styled.div`
  width: 150px;
`;
const TextTitle = styled.div`
  width: 100%;
`;
const IconContainer = styled.div`
  width: 150px;
`;

const CategoryContent = styled.div`
  width: 150px;
  padding-left: 30px;
`;
const TitleContent = styled.div`
  width: 100%;
  span {
    font-size: 13px;
    color: #ff4343;
    margin-left: 5px;
  }
`;
const IconContent = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  div {
    display: flex;
  }
`;
