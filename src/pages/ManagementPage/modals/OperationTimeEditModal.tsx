import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import closeImage from "../../../assets/images/close.png"; // 닫기 버튼 이미지

interface OperationTime {
  mode: "same" | "different";
  same: { start: string; end: string };
  different: { [key: string]: { start: string; end: string } };
}

interface OperationTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTimes: {
    mode: "same" | "different";
    same: { start: string; end: string };
    different: { [key: string]: { start: string; end: string } };
  };
  onSave: (newOperationTime: {
    mode: "same" | "different";
    same: { start: string; end: string };
    different: { [key: string]: { start: string; end: string } };
  }) => void;
}

const OperationTimeEditModal: React.FC<OperationTimeModalProps> = ({
  isOpen,
  onClose,
  selectedTimes,
  onSave,
}) => {
  const [operationTime, setOperationTime] = useState(selectedTimes);
  const [tempOperationTime, setTempOperationTime] = useState(selectedTimes);
  const [selectedDay, setSelectedDay] = useState<string>("월요일");

  useEffect(() => {
    if (isOpen) {
      setTempOperationTime(selectedTimes); 
    }
  }, [isOpen, selectedTimes]);

   const handleSave = () => {
     let newOperationTime;

     if (tempOperationTime.mode === "same") {
       // '매일 같아요' 선택 시 '요일별로 달라요' 데이터 초기화
       newOperationTime = {
         ...tempOperationTime,
         different: {
           월요일: { start: "00:00", end: "00:00" },
           화요일: { start: "00:00", end: "00:00" },
           수요일: { start: "00:00", end: "00:00" },
           목요일: { start: "00:00", end: "00:00" },
           금요일: { start: "00:00", end: "00:00" },
           토요일: { start: "00:00", end: "00:00" },
           일요일: { start: "00:00", end: "00:00" },
         }, // 다른 요일 데이터 초기화
       };
     } else {
       // '요일별로 달라요' 선택 시 '매일 같아요' 데이터 초기화
       newOperationTime = {
         ...tempOperationTime,
         same: { start: "00:00", end: "00:00" }, // 기본값으로 초기화
       };
     }

     setOperationTime(newOperationTime); // 저장된 상태 업데이트
     onSave(newOperationTime);
     onClose();
   };

  const handleClose = () => {
    setTempOperationTime(operationTime); // 변경사항 무시하고 기존 값으로 복구
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal mode={tempOperationTime.mode}>
        <CloseButton src={closeImage} onClick={handleClose} />
        <Title>영업시간</Title>

        <InfoBoxContainer>
          <InfoBox
            selected={tempOperationTime.mode === "same"}
            onClick={() =>
              setTempOperationTime({ ...operationTime, mode: "same" })
            }
          >
            매일같아요
          </InfoBox>
          <InfoBox
            selected={tempOperationTime.mode === "different"}
            onClick={() =>
              setTempOperationTime({ ...operationTime, mode: "different" })
            }
          >
            요일별로달라요
          </InfoBox>
        </InfoBoxContainer>

        {tempOperationTime.mode === "same" ? (
          <SameHours
            operationTime={tempOperationTime}
            setOperationTime={setTempOperationTime}
          />
        ) : (
          <DifferentHours
            different={tempOperationTime.different}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setOperationTime={setTempOperationTime}
          />
        )}

        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};
export default OperationTimeEditModal;
export {};

// ✅ "매일 같아요" UI 컴포넌트
const SameHours: React.FC<{ operationTime: OperationTime; setOperationTime: React.Dispatch<React.SetStateAction<OperationTime>> }> = ({
  operationTime,
  setOperationTime,
}) => {
  const handleTimeChange = (date: Date | null, type: "start" | "end") => {
    if (date) {
      const formattedTime = date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setOperationTime((prev) => ({
        ...prev,
        same: { ...prev.same, [type]: formattedTime },
      }));
    }
  };

  return (
    <HoursContainer>
      <DatePickerWrapper>
        <DatePicker
          selected={new Date(`1970-01-01T${operationTime.same.start}:00`)}
          onChange={(date) => handleTimeChange(date, "start")}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="시작 시간"
          dateFormat="HH:mm"
          locale={ko}
        />
        ~
        <DatePicker
          selected={new Date(`1970-01-01T${operationTime.same.end}:00`)}
          onChange={(date) => handleTimeChange(date, "end")}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="종료 시간"
          dateFormat="HH:mm"
          locale={ko}
        />
      </DatePickerWrapper>
    </HoursContainer>
  );
};

// ✅ "요일별로 달라요" UI 컴포넌트
const DifferentHours: React.FC<{
  different: Record<string, { start: string; end: string }>;
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  setOperationTime: React.Dispatch<React.SetStateAction<OperationTime>>;
}> = ({ different, selectedDay, setSelectedDay, setOperationTime }) => {

  const handleTimeChange = (date: Date | null, type: "start" | "end") => {
    if (date) {
      const formattedTime = date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setOperationTime((prev) => ({
        ...prev,
        different: {
          ...prev.different,
          [selectedDay]: {
            ...prev.different[selectedDay],
            [type]: formattedTime,
          },
        },
      }));
    }
  };


  return (
    <ColumnContainer>
      {/* ✅ 요일 선택 (단일 선택 가능) */}
      <WeekContainer>
        {[
          "월요일",
          "화요일",
          "수요일",
          "목요일",
          "금요일",
          "토요일",
          "일요일",
        ].map((day) => (
          <DayBox
            key={day}
            selected={selectedDay === day}
            onClick={() => setSelectedDay(day)}
          >
            {day.substring(0, 1)} {/* 첫 글자만 표시 */}
          </DayBox>
        ))}
      </WeekContainer>

      {/* ✅ 선택된 요일의 시간 설정 */}
      <HoursContainer>
        <DatePickerWrapper>
          <DatePicker
            selected={
              new Date(
                `1970-01-01T${different[selectedDay]?.start || "00:00"}:00`
              )
            }
            onChange={(date) => handleTimeChange(date, "start")}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="시작 시간"
            dateFormat="HH:mm"
            locale={ko}
          />
          ~
          <DatePicker
            selected={
              new Date(
                `1970-01-01T${different[selectedDay]?.end || "00:00"}:00`
              )
            }
            onChange={(date) => handleTimeChange(date, "end")}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="종료 시간"
            dateFormat="HH:mm"
            locale={ko}
          />
        </DatePickerWrapper>
      </HoursContainer>

      {/* ✅ 변경된 정보가 Explain에 반영 */}
      <DifferentContainer>
        {Object.entries(different).map(([day, time]) => (
          <>
            <DayInfo key={day}>
              <Explain>{day}</Explain>
              <Explain>
                {time.start} ~ {time.end}
              </Explain>
            </DayInfo>
            <Divider/>
          </>
        ))}
      </DifferentContainer>
    </ColumnContainer>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div<{ mode: "same" | "different" }>`
  background: #111;
  padding: 40px;
  border-radius: 12px;
  width: 784px;
  height: ${({ mode }) =>
    mode === "same" ? "450px" : "900px"}; /* ✅ 모드에 따라 높이 변경 */
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #efeedf;
  margin-bottom: 30px;
  margin-left: 50px;
  margin-top: 30px;
  align-self: flex-start;
`;

const SaveButton = styled.button`
  background: #efd800;
  border: none;
  padding: 12px;
  width: 380px;
  height: 56px;
  margin-top: 70px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #171714;
  font-weight: bold;
  box-sizing: border-box;
`;

  
const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-left: 50px;
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
  flex-direction: column;
  margin-left: 50px;
  margin-top: 20px;
  color: #a8a7a1;
  align-self: flex-start;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  width: 380px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .react-datepicker-wrapper {
    width: 160px;
  }

  .react-datepicker__input-container {
    width: 160px !important; /* ✅ input 크기 강제 고정 */
  }

  .react-datepicker__input-container input {
    width: 160px !important;
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
  }

  .react-datepicker {
    font-family: "Arial", sans-serif;
    background-color: #222;
    border-radius: 10px;
    padding: 10px;
  }

  .react-datepicker__header {
    background-color: #444;
    color: #fff;
  }

  .react-datepicker__time-container {
    background-color: #21211d;
    color: #a8a7a1;
    backdrop-filter: none; /* 블러 효과 제거 */
  }

  .react-datepicker__time-list {
    background-color: #21211d;
    color: #a8a7a1;
    opacity: 1; /* 흐려짐 방지 */
  }

  .react-datepicker__time-list-item--selected {
    background-color: #007bff !important;
    color: white !important;
  }

  .react-datepicker-popper {
    margin: 0 !important; /* ✅ 오른쪽 여백 제거 */
    padding: 0 !important; /* ✅ 내부 여백 제거 */
    position: absolute !important; /* ✅ 고정된 위치 */
    z-index: 9999; /* ✅ UI 겹침 방지 */
  }
`;

const DifferentContainer = styled.div`
  width: 550px;
  height: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  background-color: #111;
  margin-left: 40px;
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
  background-color: #111;
  margin-left: 40px;
  margin-top: 10px;
`;

const Explain = styled.div`
  color: #a8a7a1;
  font-size: 16px;
  margin-top: 10px;
`;

const Divider = styled.div`
  width: 550px;
  border: 1px solid #525250;
  margin-top: 20px;
  margin-left: 40px;
`;

const WeekContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  margin-left: 50px;
`;

const DayBox = styled.div<{ selected: boolean}>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) => (selected ? "#fff" : "#323230")};
  color: ${({ selected }) => (selected ? "#000" : "#fff")};
  font-size: 14px;
  cursor: pointer;
`;