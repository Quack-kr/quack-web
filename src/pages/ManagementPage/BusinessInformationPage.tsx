import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import styled from "styled-components";
import OperationTimeEditModal from "./modals/OperationTimeEditModal";
import ClosedEditModal from "./modals/ClosedEditModal";
import StateEditModal from "./modals/StateEditModal";

// ✅ 00:00 시간을 반환하는 함수
const getDefaultTime = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

const BusinessInformationPage: React.FC = () => {
  const [isOperstionTimeModalOpen, setIsOperstionTimeModalOpen] =
    useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] =
    useState(false);
  const [isStateModalOpen, setIsStateModalOpen] = useState(false);
  
  //임시 데이터
  const [restaurant, setRestaurant] = useState<{
    name: string;
    address: string;
    category: string[];
    pictures: string[];
    line_description: string;
    description: string;
    service_and_information: string[];
    business_state: string[];
    operation_time: {
      mode: "same" | "different";
      same: { start: string; end: string };
      different: Record<string, { start: string; end: string }>;
    };
    break_time: {
      use: boolean;
      start: string;
      end: string;
    };
    regular_closed: string[]; // ✅ 정기휴무 요일 추가
  }>({
    name: "꽥 분식점 1호",
    address: "서울특별시 왕십리로 31길 9 1층",
    category: ["일식", "초밥"],
    pictures: [],
    line_description: "",
    description: "",
    service_and_information: ["고기 구워드려요", "이용시간 제한있어요"],
    business_state: ["임시휴무"],
    operation_time: {
      mode: "same",
      same: { start: "00:00", end: "00:00" },
      different: {
        월요일: { start: "00:00", end: "00:00" },
        화요일: { start: "00:00", end: "00:00" },
        수요일: { start: "00:00", end: "00:00" },
        목요일: { start: "00:00", end: "00:00" },
        금요일: { start: "00:00", end: "00:00" },
        토요일: { start: "00:00", end: "00:00" },
        일요일: { start: "00:00", end: "00:00" },
      },
    },
    break_time: {
      use: true,
      start: "00:00",
      end: "00:00",
    },
    regular_closed: [],
  });

  return (
    <InformationCardContainer>
      <InformationCard>
        <Information>
          <SubTitle>영업상태</SubTitle>
          <InfoBoxContainer>
            {restaurant.business_state.map((info, index) => (
              <InfoBox key={index} selected={false}>
                {info}
              </InfoBox>
            ))}
          </InfoBoxContainer>
        </Information>
        <EditBtn onClick={() => setIsStateModalOpen(true)}>수정하기</EditBtn>
      </InformationCard>
      <StateEditModal
        isOpen={isStateModalOpen}
        onClose={() => setIsStateModalOpen(false)}
        states={restaurant.business_state}
        onSave={(newState) => {
          setRestaurant((prev) => ({
            ...prev,
            business_state: newState,
          }));
        }}
      />
      <Divider />
      <InformationCard>
        <Information>
          <SubTitle>영업시간</SubTitle>
          <InfoBoxContainer>
            <InfoBox
              selected={restaurant.operation_time.mode === "same"}
              onClick={() =>
                setRestaurant((prev) => ({
                  ...prev,
                  operation_time: {
                    ...prev.operation_time,
                    mode: "same",
                  },
                }))
              }
            >
              매일같아요
            </InfoBox>
            <InfoBox
              selected={restaurant.operation_time.mode === "different"}
              onClick={() =>
                setRestaurant((prev) => ({
                  ...prev,
                  operation_time: {
                    ...prev.operation_time,
                    mode: "different",
                  },
                }))
              }
            >
              요일별로달라요
            </InfoBox>
          </InfoBoxContainer>
        </Information>
        <EditBtn onClick={() => setIsOperstionTimeModalOpen(true)}>
          수정하기
        </EditBtn>
        <OperationTimeEditModal
          isOpen={isOperstionTimeModalOpen}
          onClose={() => setIsOperstionTimeModalOpen(false)}
          selectedTimes={restaurant.operation_time}
          onSave={(newOperationTime) => {
            setRestaurant((prev) => ({
              ...prev,
              operation_time: newOperationTime,
            }));
          }}
        />
      </InformationCard>
      <Divider />
      {restaurant.operation_time.mode === "same" ? (
        <>
          <SameHours
            start={restaurant.operation_time.same.start}
            end={restaurant.operation_time.same.end}
          />
          <Divider />
        </>
      ) : (
        <DifferentHours different={restaurant.operation_time.different} />
      )}
      <InformationCard>
        <Information>
          <SubTitle>정기휴무</SubTitle>
          <WeekContainer>
            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
              <DayBox
                key={day}
                selected={restaurant.regular_closed.includes(day)}
              >
                {day}
              </DayBox>
            ))}
          </WeekContainer>
        </Information>
        <EditBtn onClick={() => setIsCloseModalOpen(true)}>수정하기</EditBtn>
      </InformationCard>
      <ClosedEditModal
        isOpen={isCloseModalOpen}
        onClose={() => setIsCloseModalOpen(false)}
        closeDays={restaurant.regular_closed}
        onSave={(newCloseDays) => {
          setRestaurant((prev) => ({
            ...prev,
            regular_closed: newCloseDays,
          }));
        }}
      />
      <Divider />
      <InformationCard></InformationCard>
      <InformationCard>
        <Information>
          <SubTitle>브레이크 타임</SubTitle>
          <InfoBoxContainer>
            <InfoBox
              selected={restaurant.break_time.use === false}
              onClick={() =>
                setRestaurant((prev) => ({
                  ...prev,
                  break_time: {
                    ...prev.break_time,
                    use: false,
                  },
                }))
              }
            >
              없어요
            </InfoBox>
            <InfoBox
              selected={restaurant.break_time.use === true}
              onClick={() =>
                setRestaurant((prev) => ({
                  ...prev,
                  break_time: {
                    ...prev.break_time,
                    use: true,
                  },
                }))
              }
            >
              있어요
            </InfoBox>
          </InfoBoxContainer>
        </Information>
        <EditBtn>수정하기</EditBtn>
      </InformationCard>
      {restaurant.break_time.use && (
        <BreakHours
          start={restaurant.break_time.start}
          end={restaurant.break_time.end}
        />
      )}
      <Divider />
    </InformationCardContainer>
  );
};

export default BusinessInformationPage;

const SameHours: React.FC<{ start: string; end: string }> = ({
  start,
  end,
}) => {
  return (
    <HoursContainer>
      <Hours>{start}</Hours>~<Hours>{end}</Hours>
    </HoursContainer>
  );
};

const DifferentHours: React.FC<{
  different: Record<string, { start: string; end: string }>;
}> = ({ different }) => {
  return (
    <DifferentContainer>
      {Object.entries(different).map(([day, time]) => (
        <>
          <DayInfo>
            <Explain>{day}</Explain>
            <Explain>
              {time.start}~{time.end}
            </Explain>
          </DayInfo>
          <Divider />
        </>
      ))}
    </DifferentContainer>
  );
};

//Break Time UI Component
const BreakHours: React.FC<{ start: string; end: string }> = ({
  start,
  end,
}) => {
  return (
    <HoursContainer>
      <Hours>{start}</Hours>~<Hours>{end}</Hours>
    </HoursContainer>
  );
};

// ✅ 스타일 정의
const Divider = styled.div`
  width: 550px;
  border: 1px solid #525250;
  margin-top: 20px;
  margin-left: 40px;
`;

const InformationCardContainer = styled.div`
  width: 550px;
  background-color: #171714;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const InformationCard = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 40px;
  align-items: center;
  justify-content: space-between;
`;

const SubTitle = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditBtn = styled.div`
  width: 80px;
  height: 40px;
  background-color: #21211d;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
`;

const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const InfoBox = styled.div<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? "#FFF" : "#323230")};
  color: ${({ selected }) => (selected ? "#000" : "#FFF")};
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;
`;

const HoursContainer = styled.div`
  display: flex;
  width: 360px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #a8a7a1;
`;

const Hours = styled.div`
  width: 160px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #a8a7a1;
  background-color: #21211d;
  border: 1px solid #a8a7a1;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  /* 수직 정렬 추가 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DifferentContainer = styled.div`
  width: 550px;
  height: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const DayInfo = styled.div`
  width: 550px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #a8a7a1;
  background-color: #171714;
  margin-left: 40px;
  margin-top: 15px;
`;

const Explain = styled.div`
  color: #a8a7a1;
  font-size: 16px;
  margin-top: 10px;
`;

const WeekContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;
`;

const DayBox = styled.div<{ selected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) => (selected ? "#fff" : "#323230")};
  color: ${({ selected }) => (selected ? "#000" : "#fff")};
  cursor: pointer;
  font-size: 14px;
`;
