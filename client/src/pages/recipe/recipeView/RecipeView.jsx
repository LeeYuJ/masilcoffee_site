import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Background, ContainerWrap, Container, Wrap } from "../Recipe.style";
import * as S from "./RecipeView.style";
import PostList from "../components/PostList";
import PostInput from "../components/PostInput";
import CommentList from "../components/CommentList";
import { getComments } from "../../../api/comment";
import { useParams } from "react-router-dom";
import { getBoard } from "../../../api/board";

const RecipeView = () => {
  const token = useSelector((state) => state.login.token);
  const [boardData, setBoardData] = useState("");
  const [commentData, setCommentData] = useState("");
  const params = useParams();
  const boardId = params.boardId;
  
  
  useEffect(() => {
    const fn = async () => {
      try {
        const board = await getBoard(boardId);
        setBoardData(board);
        const comment = await getComments(boardId);
        setCommentData(comment);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn(); 
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <ContainerWrap>
        {boardData ? (
          <>
            <Wrap>
              <PostList post={boardData} type={"view"} />
            </Wrap>
            {token && (
              <S.TextWrap>
                <Container>
                  <PostInput
                    input={{
                      type: "text",
                      placeholder: "댓글을 작성해주세요.",
                    }}
                    button={{
                      text: "작성",
                      type: "red",
                    }}
                  />
                </Container>
              </S.TextWrap>
            )}
            {commentData.length > 0 ? (
              commentData.map((comment, index) => <CommentList key={index} comment={comment} />)
            ) : (
              <div style={{ textAlign: "center" }}>작성된 댓글이 없습니다.</div>
            )}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ContainerWrap>
    </Background>
  );
};

export default RecipeView;
