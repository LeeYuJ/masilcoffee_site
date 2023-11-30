import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import * as S from "../components/style/Bottom.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { BsChat } from "react-icons/bs";

import { getAllBoards } from "../../../api/board";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllBoards } from "../../../redux/action/boardAction";

const Bottom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Redux 스토어에서 게시글 데이터 가져오기
  const allBoards = useSelector((state) => state.board);

  useEffect(() => {
    // dispatch(actionGetAllBoards(boards)); // 데이터 로드
    console.log("올보더스", allBoards);
    const fn = async () => {
      try {
        const board = await getAllBoards("", 1, 10);
        dispatch(actionGetAllBoards(board));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, [dispatch]);

  const handleBoardClick = (boardId) => {
    navigate(`/RecipeView/${boardId}`); // 게시글 상세 페이지로 이동
  };

  const settings = {
    infinite: true,
    speed: 15000, // 슬라이드 전환 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 0, // 자동 슬라이드 간격
    cssEase: "linear", // 일정한 속도로 움직이도록 설정
  };
  // const slideData = [
  //   {
  //     id: "1",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "2",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "3",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "4",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "5",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "6",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "7",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "8",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "9",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  //   {
  //     id: "10",

  //     communityText:
  //       "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
  //   },
  // ];

  // communityText를 57자 이하로 제한하는 함수
  // const truncateText = (text, maxLength) => {
  //   return text.length > maxLength
  //     ? text.substring(0, maxLength) + "..."
  //     : text;
  // };
  // 고정된 배경색을 사용
  const fixedBackgroundColor = "#8e0e28";
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 100%, 80%)`;
    setBackgroundColor(pastel);
  }, []);

  return (
    <S.BottomSlide>
      <Slider {...settings}>
        {Array.isArray(allBoards.boards) &&
          allBoards.boards.map((board, index) => {
            // console.log("Board ID:", board._id);
            const isOdd = index % 2 === 0;
            const boxBgColor = isOdd ? "#d9d9d9" : fixedBackgroundColor; // 홀수이면 그레이, 아니면 기존 색상

            return (
              <S.Bottom
                key={board._id}
                onClick={() => handleBoardClick(board._id)}
              >
                <S.BottomBox $bgColor={boxBgColor} isEven={isOdd}>
                  <div>
                    <b>{board.nickname}</b>
                    <p>{board.post}</p>
                  </div>
                  <S.SquareButtonBox>
                    <S.SquareButton>
                      <SquareButton
                        text={board.category}
                        bgColor={backgroundColor}
                      />
                    </S.SquareButton>
                    <S.SquareButtonBox>
                      {board.tags.length > 0 ? (
                        (() => {
                          let iterations = Math.min(board.tags.length, 2); // 최대 2개의 태그만 처리

                          let buttons = [];
                          for (let i = 0; i < iterations; i++) {
                            buttons.push(
                              <S.SquareButton key={i}>
                                <SquareButton
                                  text={board.tags[i]}
                                  bgColor={backgroundColor}
                                />
                              </S.SquareButton>
                            );
                          }

                          return buttons;
                        })()
                      ) : (
                        <></> // 태그가 없는 경우 아무것도 표시하지 않음
                      )}
                    </S.SquareButtonBox>
                  </S.SquareButtonBox>
                  <S.BsChat>
                    <BsChat />
                    <span>11</span>
                  </S.BsChat>
                </S.BottomBox>
              </S.Bottom>
            );
          })}
      </Slider>
    </S.BottomSlide>
  );
};

export default Bottom;
