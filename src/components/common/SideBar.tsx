import React from 'react';
import styled from 'styled-components';
import moreSee from "../../assets/images/moreSee.png";

const SidebarContainer = styled.div`
  width: 180px;
  height: 800px;
  display: flex;
  flex-direction: column;
  margin-top: -180px;
  margin-right: 20px;
  justify-content: center;
  background-color: #171714;
`;

const SidebarItem = styled.div`
  width: 180px;
  height: 53px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const SidebarMenu = styled.div` 
  color: #EFEEDF;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`

const MoreSeeImg = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  right: 0;
  margin-top: 5px;
`

const SideBar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarMenu>가게현황</SidebarMenu>
        <MoreSeeImg src={moreSee} />
      </SidebarItem>
      <SidebarItem>
        <SidebarMenu>가게관리</SidebarMenu>
        <MoreSeeImg src={moreSee} />
      </SidebarItem>
      <SidebarItem>
        <SidebarMenu>메뉴</SidebarMenu>
        <MoreSeeImg src={moreSee} />
      </SidebarItem>
      <SidebarItem>
        <SidebarMenu>광고</SidebarMenu>
        <MoreSeeImg src={moreSee} />
      </SidebarItem>
      <SidebarItem>
        <SidebarMenu>혜택.쿠폰</SidebarMenu>
        <MoreSeeImg src={moreSee} />
      </SidebarItem>
    </SidebarContainer>
  )
}

export default SideBar;