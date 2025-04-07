import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Section1_1 from "../../assets/images/section1_1.png";
import Section1_2 from "../../assets/images/section1_2.png";
import Section2_1 from "../../assets/images/section2_1.png";
import Section2_2 from "../../assets/images/section2_2.png";
import Section3_1 from "../../assets/images/section3_1.png";
import Section3_2 from "../../assets/images/section3_2.png";
import Section4_1 from "../../assets/images/section4_1.png";
import Section4_2 from "../../assets/images/section4_2.png";
import Section4_3 from "../../assets/images/section4_3.png";
import Section5_1 from "../../assets/images/section5_1.png";
import Section5_2 from "../../assets/images/section5_2.png";
import Section5_3 from "../../assets/images/section5_3.png";
import Section6_1 from "../../assets/images/section6_1.png";
import Section6_2 from "../../assets/images/section6_2.png";
import Section6_3 from "../../assets/images/section6_3.png";
import AppleStoreBtn from "../../assets/images/apple_store_btn.png";

const HomePage: React.FC = () => {
  //배경 색 변경
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#F5C622";
    } else {
      document.body.style.backgroundColor = "#171714"; // 다른 페이지는 이 색으로
    }
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/management/apply");
  };

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
        <Image src={AppleStoreBtn} translateY="30px" />
        <Image src={Section1_1} translateX="500px" translateY="-500px" />
      </Section>
      <Image
        src={Section1_2}
        //width="30px"
        //height="311px"
        translateY="-100px"
      />
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
        <Image src={Section2_1} marginTop="200px" />
        <Image src={Section2_2} translateX="650px" translateY="-750px" />
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
        <Image src={Section3_1} translateX="850px" translateY="-300px" />
        <Image src={Section3_2} translateY="-350px" />
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
        <Image
          src={Section4_1}
          width="400px"
          height="328px"
          translateX="850px"
          translateY="-350px"
        />
        <Image src={Section4_2} translateY="-250px" />
        <Image src={Section4_3} translateX="650px" translateY="-605px" />
      </Section>
      <Section height="1100px">
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
        <Image src={Section5_1} translateX="850px" translateY="-250px" />
        <Image src={Section5_2} translateX="180px" translateY="-150px" />
        <Image src={Section5_3} translateY="-100px" />
      </Section>
      <Section isCenter={true} height="730px">
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
        <RegisterBtn onClick={handleRegisterClick}>입점 신청하기</RegisterBtn>
      </Section>
      <Section isCenter={true} height="1250px">
        <Image src={Section6_1} translateY="-200px" />
        <AlignCenterContainer>
          <Image src={Section6_2} />
          <Image src={Section6_3} />
        </AlignCenterContainer>
      </Section>
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 1920px;
  margin-top: 50px;
  background-color: #f5c622;
  font-family: TheJamsil5;
  
  min-width: 1920px;
  overflow: hidden;
`;

const AlignCenterContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transform: translateY(-150px);
`

const Section = styled.section<{ isCenter?: boolean; height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isCenter }) => (isCenter ? "center" : "flex-start")};
  background-color: #f5c622;
  width: 1920px;
  padding: 200px 335px 0px 335px;
  height: ${({ height }) => height || "980px"};
  overflow: hidden;
`;

const Title1 = styled.div`
  font-size: 80px;
  line-height: 100px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;
`;
const Title2 = styled.div`
  font-size: 64px;
  line-height: 80px;
  font-weight: 700;
  color: #070706;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #070706;
  font-family: Pretendard;
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
  color: #efeedf;
  background-color: #070706;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img<{
  width?: string;
  height?: string;
  translateX?: string;
  translateY?: string;
  marginTop?: string;
}>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  transform: translate(
    ${({ translateX }) => translateX || "0"},
    ${({ translateY }) => translateY || "0"}
  );
  margin-top: ${({ marginTop }) => marginTop || "20px"};
`;