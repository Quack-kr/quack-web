import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin-left: 100px;
  justify-content: center;
  background-color: #171714;
`

const SidebarItem = styled.div`
  width: 180px;
  height: 53px;
  color: #EFEEDF;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`

const SideBar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>가게현황</SidebarItem>
      <SidebarItem>가게관리</SidebarItem>
      <SidebarItem>메뉴</SidebarItem>
      <SidebarItem>광고</SidebarItem>
      <SidebarItem>혜택.쿠폰</SidebarItem>
    </SidebarContainer>
  )
}

export default SideBar;