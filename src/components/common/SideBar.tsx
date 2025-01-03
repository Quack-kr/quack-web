import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  justify-content: center;
  background-color: #171714;
`

const SideBar: React.FC = () => {
  return (
    <SidebarContainer></SidebarContainer>
  )
}

export default SideBar;