import React from "react";
import styled from "styled-components";
import Background_Main from "../../assets/images/background_main.png"

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 1920px;
  min-width: 1280px;
  background-color: #f5c622;
  font-family: TheJamsil5;
`;

const Section = styled.section<{ isRegister?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isRegister }) => (isRegister ? "center" : "flex-start")};
  background-color: #f5c622;
  min-width: 1280px;
  margin-bottom: 50px;
`;

const Title1 = styled.div`
  font-size: 80px;
  line-height: 100px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;
`
const Title2 = styled.div`
  font-size: 64px;
  line-height: 80px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #070706;
`;

const RegisterBtn = styled.div`
  width: 200px;
  height: 72px;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 32px 16px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 24px;
  color: #EFEEDF;
  background-color: #070706;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage: React.FC = () => {
  //배경 색 변경

  return (
    <HomePageContainer>
      <Section>
        <Title1>
          싫어하는걸
          <br />
          싹빼고
          <br />
          시작하자
        </Title1>
        <Text>
          배고픈 순간 먹고싶은 음식은 떠오르지 않을때
          <br />
          근데 먹기 싫은건 딱! 알고 있을때 그때 사용하면
          <br />딱 좋을거 같지 않아요?
        </Text>
      </Section>
      <Section>
        <Title2>
          먹고싶은건
          <br />
          몰라도
          <br />
          싫은건 알잖아?
        </Title2>
        <Text>
          안 땡기는거 어제 먹은거 좀 있다 먹을거
          <br />
          다! 빼면서 지금 먹을걸 찾아볼까요?
        </Text>
      </Section>
      <Section>
        <Title2>
          그리고 난...
          <br />
          싫어하는 것도
          <br />다 빼버려!
        </Title2>
        <Text>
          이러면 뭐가 남을진 모르겠지만
          <br />다 계획이 있으시겠죠?
        </Text>
      </Section>
      <Section>
        <Title2>
          빼고 찾은 식당
          <br />
          갈까?말까?
          <br />
          고민될 땐
        </Title2>
        <Text>
          최근 3개월 사람들이 방문하는 이유와
          <br />
          가기 망설이는 이유까지 알고 가보자고!
        </Text>
      </Section>
      <Section>
        <Title2>
          그래서 거기
          <br />
          뭐가 맛있는데?
        </Title2>
        <Text>
          웨이팅 까지하고 들어간 맛집
          <br />
          메뉴가 너무 많아서 고민된다면
          <br />
          미친맛 메뉴만 시키자!
        </Text>
      </Section>
      <Section isRegister={true}>
        <Title2>
          우리 가게 홍보도
          <br />
          꽥에서 시작하자
        </Title2>
        <Text>
          미친맛을 자랑하는 가게 메뉴를 알리고
          <br />
          상위노출을 노려보세요!
        </Text>
        <RegisterBtn>
          입점 신청하기
        </RegisterBtn>
      </Section>
    </HomePageContainer>
  );
}

export default HomePage;