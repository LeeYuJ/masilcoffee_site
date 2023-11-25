import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Menus from "./AdminMenu.style.";
import MenuSelect from "./components/MenuSelect";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import MenuButtons from "./components/MenuButtons";
import Table from "../../../components/ui/table/Table";
import MenuModal from "./components/MenuModal";
import OptionModal from "./components/OptionModal";
import { usePagination } from "../../../hooks/usePagination";
import sliceTen from "../../../util/forPagenation/sliceTen";
import { actionGetAllProducts, actionDeleteProduct } from "../../../redux/action/productAction";
import { getAllProducts, deleteProduct } from "../../../api/product";

const AdminMenu = ({ trData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  const allProduct = useSelector((state) => state.product.products);
  const tdData = allProduct.map((data) => [data._id, data.image_url, data.category, data.name, data.size, data.temp, data.price]);
  console.log("tdData", tdData);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showOptionModal, setShowOptionModal] = useState(false);
  const [modifyProduct, setModifyProduct] = useState(undefined);
  const options = ["전체 메뉴", "에스프레소", "논커피", "스무디", "티", "에이드"];
  const [page, setPage] = useState(1);

  const pageConst = {
    totalCount: tdData.length,
    pageSize: 6,
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

  useEffect(() => {
    const fn = async () => {
      try {
        const products = await getAllProducts();
        dispatch(actionGetAllProducts(products));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  const handleTdClick = (data, isEdit) => {
    const selectedProductId = data[0];
    const selectedProduct = allProduct.filter((product) => product._id === selectedProductId);
    console.log("selectedProduct", selectedProduct);
    if (isEdit === "edit") {
      setShowMenuModal(!showMenuModal);
      setModifyProduct(selectedProduct);
    } else {
      const isDeleted = window.confirm("메뉴를 삭제하시겠습니까?");
      if (isDeleted) {
        const fn = async () => {
          try {
            await deleteProduct(selectedProductId, token);
            dispatch(actionDeleteProduct(selectedProductId));
            //dispatch(actionGetAllProducts());
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
      <Menus.Container>
        {modifyProduct !== undefined || showMenuModal ? (
          <MenuModal
            title={modifyProduct ? "메뉴 수정" : "메뉴 추가"}
            closeModal={() => {
              setModifyProduct(undefined);
              setShowMenuModal(false);
            }}
            modifyProduct={modifyProduct}
          />
        ) : null}
        {showOptionModal && (
          <OptionModal
            title="옵션 수정"
            closeModal={() => {
              setShowOptionModal(!showOptionModal);
            }}
          />
        )}
        <AdminSidebar />
        <Menus.Content>
          <Menus.TopBox>
            <MenuSelect options={options} />
            <Menus.ButtonWrapper>
              <MenuButtons
                name="optionAndNewMenu"
                title="옵션 정보 수정"
                isClicked={() => {
                  setShowOptionModal(!showOptionModal);
                }}
              />
              <MenuButtons
                name="optionAndNewMenu"
                title="메뉴 추가"
                isClicked={() => {
                  setShowMenuModal(!showMenuModal);
                }}
              />
            </Menus.ButtonWrapper>
          </Menus.TopBox>
          <Table trData={trData} tdData={slicedData} isMenuTable={true} onTdClick={handleTdClick} />
          <Menus.Pagination>
            <Menus.PaginationItem href="#">&laquo;</Menus.PaginationItem>
            <div>
              {pageArr.map((arr) => {
                return (
                  <Menus.PaginationItem name={arr} href="#" onClick={handleClick}>
                    {arr}
                  </Menus.PaginationItem>
                );
              })}
            </div>
            <Menus.PaginationItem href="#">&raquo;</Menus.PaginationItem>
          </Menus.Pagination>
        </Menus.Content>
      </Menus.Container>
    </>
  );
};

AdminMenu.defaultProps = {
  trData: ["이미지", "종류", "이름", "사이즈", "ICE/HOT", "가격"],
};

export default AdminMenu;
