import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";

interface StateEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  states: string[];
  onSave: (type: string[]) => void;
}

const StateEditModal: React.FC<StateEditModalProps> = ({
  isOpen,
  onClose,
  states,
  onSave,
}) => {
  const [state, setState] = useState(states);
  
  useEffect(() => {
    if (isOpen) {
      setState(states); // 기존 operation_time 데이터 적용
    }
  }, [isOpen, states]);

  const handleToggleState = (value: string) => {
    setState((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value) //이미 있으면 제거
        : [...prevState, value] //없으면 추가
    );
  };

  const handleSave = () => {
    onSave(state);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <Title>영업상태</Title>
        <InfoBoxContainer>
          <InfoBox
            selected={state.includes("임시휴무")}
            onClick={() => {
              handleToggleState("임시휴무");
            }}
          >
            임시휴무
          </InfoBox>
          <InfoBox
            selected={state.includes("재료소진")}
            onClick={() => handleToggleState("재료소진")}
          >
            재료소진
          </InfoBox>
        </InfoBoxContainer>
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default StateEditModal;
export {};

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
  width: 784px;
  height: 337px;
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

const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 40px;
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
