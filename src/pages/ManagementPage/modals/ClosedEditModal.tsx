import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";

interface ClosedEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeDays: string[];
  onSave: (type: string[]) => void;
}

const ClosedEditModal: React.FC<ClosedEditModalProps> = ({
  isOpen,
  onClose,
  closeDays,
  onSave,
}) => {
  const [days, setDays] = useState(closeDays);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDays(closeDays); // 기존 operation_time 데이터 적용
    }
  }, [isOpen, closeDays]);
  
  const toggleClosedDay = (day: string) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    onSave(days);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <Title>정기휴무</Title>
        <ColumnContainer>
          <InfoBoxContainer>
            <InfoBox
              selected={isChecked === true}
              onClick={() => {
                setIsChecked(true);
                setDays([]);
              }}
            >
              없어요
            </InfoBox>
            <InfoBox
              selected={isChecked === false}
              onClick={() => setIsChecked(false)}
            >
              있어요
            </InfoBox>
          </InfoBoxContainer>
          <WeekContainer>
            {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
              <DayBox
                key={day}
                selected={days.includes(day)}
                onClick={!isChecked ? () => toggleClosedDay(day) : undefined}
                disabled={isChecked}
              >
                {day}
              </DayBox>
            ))}
          </WeekContainer>
        </ColumnContainer>

        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default ClosedEditModal;
export { };
  
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #111;
  padding: 80px;
  border-radius: 12px;
  width: 785px;
  height: 400px;
  text-align: center;
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
  align-self: flex-start;
  margin-left: 40px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #efeedf;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 40px;
`;

const SaveButton = styled.button`
  background: #efd800;
  border: none;
  padding: 10px;
  width: 380px;
  height: 56px;
  margin-top: 50px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #171714;
  font-weight: 700;
  box-sizing: border-box;
`;

const WeekContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;
`;

const DayBox = styled.div<{ selected: boolean; disabled?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) => (selected ? "#fff" : "#323230")};
  color: ${({ selected }) => (selected ? "#000" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; 
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