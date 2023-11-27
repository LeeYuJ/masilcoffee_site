import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Users from "./AdminUser.style";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import UserSearch from "./components/UserSearch";
import Table from "../../../components/ui/table/Table";
import UserModal from "./components/UserModal";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";
import { initUserSearch, search, deleteUser } from "../../../redux/action/user/usersAction";
import { axiosGetUsers } from "../../../api/user/users";
import { axiosDelAdmin } from "../../../api/user/user";

const AdminUser = ({ trData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [page, setPage] = useState(1);
  const [showUserModal, setShowUserModal] = useState(false);
  const [modifyUser, setModifyUser] = useState(undefined);
  const users = useSelector((state) => state.users.users);
  const tdData = useSelector((state) => state.users.tableData);
  console.log("tdData", tdData);
  console.log("getUsers", users);

  useEffect(() => {
    const fn = async () => {
      try {
        const getUsers = await axiosGetUsers(token);
        console.log("getUsersAPI", getUsers);
        const reduxData = dispatch(initUserSearch(getUsers.users));
        console.log("reduxDataaa", reduxData);
        console.log("reduxData", reduxData.payload.initData);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  const pageConst = {
    totalCount: tdData.length,
    pageSize: 10,
    siblingCount: 1,
    currentPage: page,
  };

  const pageArr = usePagination(pageConst);

  const slicedData = sliceTen({
    currentPage: pageConst.currentPage,
    pageSize: pageConst.pageSize,
    initDataSet: tdData,
  });

  const handleClick = (e) => {
    setPage(parseInt(e.target.name, 10));
  };

  const handleSubmit = (searchData) => {
    const filteredData = dispatch(search(searchData));
    console.log("filteredData", filteredData);
  };

  const handleTdClick = (data, isEdit) => {
    const selectedUserId = data[0];
    const selectedUser = users[0].filter((user) => user._id === selectedUserId);
    console.log("selectedProduct", selectedUser);
    if (isEdit === "edit") {
      setShowUserModal(!showUserModal);
      setModifyUser(selectedUser[0]);
    } else {
      const isDeleted = window.confirm("유저를 삭제하시겠습니까?");
      if (isDeleted) {
        const fn = async () => {
          try {
            await axiosDelAdmin(token, selectedUserId);
            dispatch(deleteUser(selectedUserId));
          } catch (err) {
            console.log("err", err);
          }
        };
        fn();
      }
    }
  };

  return (
    <>
      <Users.Container>
        {showUserModal && (
          <UserModal
            closeModal={() => {
              setShowUserModal(!showUserModal);
            }}
            modifyUser={modifyUser}
          />
        )}
        <AdminSidebar />
        <Users.Content>
          <UserSearch handleSubmit={handleSubmit} />
          <Users.TableBox>
            <Table trData={trData} tdData={slicedData} isMenuTable={true} isUserTable={true} onTdClick={handleTdClick} />
          </Users.TableBox>
          <Users.Pagination>
            <Users.PaginationItem href="#">&laquo;</Users.PaginationItem>
            <div>
              {pageArr.map((arr) => {
                return (
                  <Users.PaginationItem name={arr} href="#" onClick={handleClick}>
                    {arr}
                  </Users.PaginationItem>
                );
              })}
            </div>
            <Users.PaginationItem href="#">&raquo;</Users.PaginationItem>
          </Users.Pagination>
        </Users.Content>
      </Users.Container>
    </>
  );
};

AdminUser.defaultProps = {
  trData: ["이름", "이메일", "전화번호", "닉네임", "가입일"],
};

export default AdminUser;
