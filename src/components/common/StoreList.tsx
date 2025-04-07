import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  gap: 10px;
  background: #171714;
  padding: 20px;
  margin-left: 20px;
  margin-bottom: 0;
  border-radius: 10px;
`;

const StoreCard = styled.div<{ status: string }>`
  background: #1e1e1e;
  padding: 15px;
  border-radius: 10px;
  width: 230px;
  height: 110px;
  color: #525250;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #FFFFFF;
    background-color: #323230;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top:5px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ status }) =>
      status === "영업중"
        ? "#00C853"
        : status === "영업중지"
        ? "#D32F2F"
        : "#FFB300"};
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: ${({ status }) =>
      status === "영업중"
        ? "#00C853"
        : status === "영업중지"
        ? "#D32F2F"
        : "#FFB300"};
  }
`;

const AddStoreCard = styled(StoreCard)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: gray;
  font-weight: bold;
`;

const stores = [
  { name: "니카이 우동 | 일식", address: "왕십리로 31길 9 1층", status: "입점진행중" },
  { name: "책 본식점 1호 | 일식", address: "왕십리로 31길 9 1층", status: "영업중" },
  { name: "니카이 우동 | 일식", address: "왕십리로 31길 9 1층", status: "영업중지" },
];

const StoreList = () => {
  return (
    <Container>
      {stores.map((store, index) => (
        <StoreCard key={index} status={store.status}>
          <div>{store.name}</div>
          <div>주소 : {store.address}</div>
          <div className="status">
            <span className="dot" />
            {store.status}
          </div>
        </StoreCard>
      ))}
      <AddStoreCard status="">
        <FaPlus size={16} /> 가게 추가하기
      </AddStoreCard>
    </Container>
  );
};

export default StoreList;

export {};