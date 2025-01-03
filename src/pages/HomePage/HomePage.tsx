import React from "react";
import styled from "styled-components";
import Background_Main from "../../assets/images/background_main.png"

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`

const MainSection = styled.section`
  height: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Texts = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

const Text = styled.div`
  font-size: 4rem;
  line-height: 1.5;
  font-weight: bold;
  color: #2A2925;
`

const MainImage = styled.img`
  height: 400px;
`

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <MainSection>
        <Texts>
          <Text>
            웨이팅 하기 싫어 영수증 리뷰 이벤트에
          </Text>
          <Text>
            광고 싫어 인스타 맛집 싫어 고기 안구워
          </Text>
        </Texts>
        <MainImage src={Background_Main} />
      </MainSection>
    </HomePageContainer>
  )
}

export default HomePage;