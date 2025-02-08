import React, { useState } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";

interface StoreDescriptionEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string, newLineDescription: string) => void;
}

const StoreDescriptionEditModal: React.FC<StoreDescriptionEditModalProps> = ({ isOpen, onClose, onSave }) => {
  const [storeDescription, setStoreDescription] = useState("");
  const maxChars = 150;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 150) { // 150자 제한
      setStoreDescription(newValue);
    }
  };

  const handleSave = () => {
    if (!storeDescription.trim()) {
      alert("상세소개를 입력해주세요.");
      return;
    }
    onSave('description', storeDescription);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <RowContainer>
          <Title>상세소개</Title>
          <Explain>최대 150자</Explain>
        </RowContainer>
        <TextArea
          placeholder="예) 떡볶이 하나만 바라보며 살았습니다."
          value={storeDescription}
          onChange={handleInputChange}
        />
        <CharCount>{storeDescription.length}/{maxChars}</CharCount>
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default StoreDescriptionEditModal;
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
  width: 784px;
  height: 429px;
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

const TextArea = styled.textarea`
  width: 544px;
  height: 170px;
  padding: 12px;
  font-size: 16px;
  background: #21211D;
  color: #fff;
  border: 1px solid #A8A7A1;
  border-radius: 8px;
  outline: none;
  resize: none;
  margin-bottom: 10px;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
  }
`;

const CharCount = styled.div`
  font-size: 14px;
  color: #A8A7A1;
  position: absolute;
  bottom: 190px;
  right: 125px;
  background: #21211D;
  padding: 2px 6px;
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