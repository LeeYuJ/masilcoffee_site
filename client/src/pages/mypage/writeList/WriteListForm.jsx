import React, { useState } from "react";
import { Paginamtion, PaginationItem } from "../style/CommentList.style";
import { StyledTable } from "../style/StyledTable";
import { CommentTitle } from "../style/MyPage.style";

import { usePagination } from "../../../hooks/usePagination";

function WriteListForm({ trData, tdData }) {
  const [page, setPage] = useState(1);

  const pageConst = {
    totalCount: tdData.length,
    pageSize: 10,
    siblingCount: 1,
    currentPage: page,
  };

  const pageSize = pageConst.pageSize;

  const currentPage = pageConst.currentPage;

  console.log(tdData.length);

  const pageArr = usePagination(pageConst);
  console.log("pageArr", pageArr);

  const slicedTdData = tdData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };

  return (
    <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      <StyledTable trData={trData} tdData={slicedTdData} />
      <Paginamtion>
        <PaginationItem href="#">&laquo;</PaginationItem>
        <div>
          {pageArr.map((arr) => {
            return (
              <PaginationItem name={arr} href="#" onClick={handleClick}>
                {arr}
              </PaginationItem>
            );
          })}
        </div>
        <PaginationItem href="#">&raquo;</PaginationItem>
      </Paginamtion>
    </div>
  );
}

export default WriteListForm;

WriteListForm.defaultProps = {
  trData: ["번호", "제목", "작성날짜"],
  tdData: [
    ["1", "인생의 회전적토마", "2021.12.25"],
    ["2", "인생의 회전적토마", "2021.12.25"],
    ["3", "인생의 회전적토마", "2021.12.25"],
    ["4", "인생의 회전적토마", "2021.12.25"],
    ["5", "인생의 회전적토마", "2021.12.25"],
    ["6", "인생의 회전적토마", "2021.12.25"],
    ["7", "인생의 회전적토마", "2021.12.25"],
    ["8", "인생의 회전적토마", "2021.12.25"],
    ["9", "인생의 회전적토마", "2021.12.25"],
    ["10", "인생의 회전적토마", "2021.12.25"],
    ["11", "인생의 회전적토마", "2021.12.25"],
    ["12", "인생의 회전적토마", "2021.12.25"],
    ["13", "인생의 회전적토마", "2021.12.25"],
    ["14", "인생의 회전적토마", "2021.12.25"],
    ["15", "인생의 회전적토마", "2021.12.25"],
    ["16", "인생의 회전적토마", "2021.12.25"],
    ["17", "인생의 회전적토마", "2021.12.25"],
    ["18", "인생의 회전적토마", "2021.12.25"],
    ["19", "인생의 회전적토마", "2021.12.25"],
    ["20", "인생의 회전적토마", "2021.12.25"],
    ["21", "인생의 회전적토마", "2021.12.25"],
    ["22", "인생의 회전적토마", "2021.12.25"],
    ["23", "인생의 회전적토마", "2021.12.25"],
    ["24", "인생의 회전적토마", "2021.12.25"],
    ["25", "인생의 회전적토마", "2021.12.25"],
    ["26", "인생의 회전적토마", "2021.12.25"],
    ["27", "인생의 회전적토마", "2021.12.25"],
    ["28", "인생의 회전적토마", "2021.12.25"],
    ["29", "인생의 회전적토마", "2021.12.25"],
    ["30", "인생의 회전적토마", "2021.12.25"],
    ["31", "인생의 회전적토마", "2021.12.25"],
    ["32", "인생의 회전적토마", "2021.12.25"],
    ["33", "인생의 회전적토마", "2021.12.25"],
    ["34", "인생의 회전적토마", "2021.12.25"],
    ["35", "인생의 회전적토마", "2021.12.25"],
  ],
};
