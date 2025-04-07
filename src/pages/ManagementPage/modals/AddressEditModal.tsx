import React, { useState } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";

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
  height: 456px;
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
  color: #EFEEDF;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 40px;
`;

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 40px;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #EFD800;
  align-self: flex-start;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #A8A7A1;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-top: 4px;
`;

const TextArea = styled.textarea`
  width: 544px;
  min-height: 56px; /* 기본 높이 설정 */
  padding: 12px;
  font-size: 16px;
  background: #21211D;
  color: #fff;
  border: 1px solid #A8A7A1;
  border-radius: 8px;
  outline: none;
  resize: none;
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

interface StoreAddressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (type: string, newStoreAddress: string, reason: string) => void;
}

const StoreAddressEditModal: React.FC<StoreAddressEditModalProps> = ({ isOpen, onClose, onSave }) => {
  const [storeAddress, setStoreAddress] = useState("");
  const [reason, setReason] = useState("");

  const handleSave = () => {
    if (!storeAddress.trim()) {
      alert("가게주소를 입력해주세요.");
      return;
    }
    if (!reason.trim()) {
      alert("변경 사유를 입력해주세요.");
      return;
    }
    onSave('address', storeAddress, reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <Title>주소</Title>
        <Input
          type="text"
          placeholder="변경 할 주소를 입력해 주세요."
          value={storeAddress}
          onChange={(e) => setStoreAddress(e.target.value)}
        />
        <TextContainer>
          <Label>변경사유*</Label>
          <SubText>검토 후 반영돼요 (영업일 기준 최대3일 소요)</SubText>
        </TextContainer>
        <TextArea
          placeholder="변경하시는 이유를 입력해 주세요."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default StoreAddressEditModal;
export {};