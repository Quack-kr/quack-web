import React from "react";
import styled from "styled-components";
import SideBar from "../../components/common/SideBar";

const ManagementContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 100px;
  background-color: #171714;
`

const ManagementPage: React.FC = () => {
  return (
    <ManagementContainer>
      <SideBar />
    </ManagementContainer>
  )
}

export default ManagementPage;