import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "../../components/common/SideBar";
import StoreList from "../../components/common/StoreList";
import BasicInformationPage from "./BasicInformationPage";
import BusinessInformationPage from "./BusinessInformationPage";

const ManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("기본정보");

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#F5C622";
    } else {
      document.body.style.backgroundColor = "#171714"; // 다른 페이지는 이 색으로
    }
  }, [location.pathname]);

  return (
    <ManagementWrapper>
      <ManagementContainer>
        <SideBar />
        <Conatiner>
          <StoreListSection>
            <Title active={true}>내 가게</Title>
            <StoreList />
          </StoreListSection>
          <InformationSection>
            <TitleSection>
              <Title
                active={activeTab === "기본정보"}
                onClick={() => setActiveTab("기본정보")}
              >
                기본정보
              </Title>
              <Title
                active={activeTab === "영업정보"}
                onClick={() => setActiveTab("영업정보")}
              >
                영업정보
              </Title>
            </TitleSection>
            <Divider />
            {activeTab === "기본정보" ? (
              <BasicInformationPage />
            ) : (
              <BusinessInformationPage />
            )}
          </InformationSection>
        </Conatiner>
      </ManagementContainer>
    </ManagementWrapper>
  );
};

export default ManagementPage;

const ManagementWrapper = styled.div`
  width: 100vw;
  min-width: 1920px;
  margin-bottom: 50px;
  background-color: #171714;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ManagementContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  padding: 0px 335px 0px 335px;
  box-sizing: border-box;
  margin: 0;
  background-color: #171714;
`;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171714;
`;

const StoreListSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171714;
`;

const Title = styled.div<{ active: boolean }>`
  font-size: 20px;
  font-weight: 600;
  margin-left: 40px;
  margin-top: 50px;
  color: ${({ active }) => (active ? "#FFFFFF" : "#525250")};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
`;
const InformationSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171714;
`;

const Divider = styled.div`
  width: 1050px;
  border: 1px solid #525250;
  margin-top: 20px;
  margin-left: 40px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
