import React, { useEffect, useState } from "react";
import { Paginamtion, PaginationItem } from "../style/CommentList.style";
import { StyledTable } from "../style/StyledTable";
import { CommentTitle } from "../style/MyPage.style";
import DateFormat from "../../../util/DateFormat/DateFormat";




function WriteListForm({onInsert, data}) {
  const [page, setPage] = useState(1);
  const dateType = "dateTime"
  
  const numbers = Array.from({length: data.totalpage || 0}, (_, index) => index + 1);
  
  const dataSet = data.data.map((data, index)=> {
    const date = DateFormat(dateType, data.createdAt)
    console.log(typeof data.createdAt)
    return [...[data._id, index + 1, data.post, date]]
  })

  console.log("dataSet", data)





  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };


  useEffect(() => {
    onInsert(page)
  }, [page]);

  
  return (
    <div>
      <CommentTitle>내가 작성한 글</CommentTitle>
      <StyledTable trData={data.trData} tdData={dataSet} />
      <Paginamtion>
        <PaginationItem href="#">&laquo;</PaginationItem>
        <div>
          {numbers.map(number => {
            return (
              <PaginationItem name={number} href="#" onClick={handleClick}>
                {number}
              </PaginationItem>
            )
          })}
            
        </div>
        <PaginationItem href="#">&raquo;</PaginationItem>
      </Paginamtion>
    </div>
  );
}

export default WriteListForm;
