import React, { useState } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";

interface StoreLineDescriptionEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string, newLineDescription: string) => void;
}

const StoreLineDescriptionEditModal: React.FC<StoreLineDescriptionEditModalProps> = ({ isOpen, onClose, onSave }) => {
  const [storeLineDescription, setStoreLineDescription] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 20) { // ✅ 20자 제한
      setStoreLineDescription(newValue);
    }
  };

  const handleSave = () => {
    if (!storeLineDescription.trim()) {
      alert("한 줄 소개를 입력해주세요.");
      return;
    }
    onSave('line_description', storeLineDescription);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <RowContainer>
          <Title>한 줄 소개</Title>
          <Explain>최대 20자</Explain>
        </RowContainer>
        <Input
          type="text"
          placeholder="예) 떡볶이 하나만 바라보며 살았습니다."
          value={storeLineDescription}
          onChange={handleInputChange}
        />
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default StoreLineDescriptionEditModal;
export { };

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

const Modal = styled.div`
  background: #111;
  padding: 80px;  
  border-radius: 12px;  
  width: 784px;
  height: 358px;
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

const RowContainer = styled.div`
  display: flex;
  align-self: flex-start;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #EFEEDF;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 40px;
`;

const Explain = styled.div`
  font-size: 16px;
  color: #A8A7A1;
  font-weight: 500;
  margin-left: 5px;
  margin-top: 18px;
`

const Input = styled.input`
  width: 544px;
  height: 56px;
  padding: 12px;
  font-size: 16px;
  background: #21211D;
  color: #fff;
  border: 1px solid #A8A7A1;
  border-radius: 8px;
  outline: none;
  margin-bottom: 20px;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
  }
`;

const SaveButton = styled.button`
  background: #EFD800;
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
  box-sizing: border-box
`;