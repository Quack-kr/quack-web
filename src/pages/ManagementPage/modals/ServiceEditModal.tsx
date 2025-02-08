import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png"; // 닫기 버튼 이미지

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOptions: string[]; // ✅ 기본 선택된 옵션
  onSave: (selectedOptions: string[]) => void;
}

const ServiceEditModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, selectedOptions, onSave }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // ✅ 주차 옵션 리스트 (여기 있는 옵션 중 하나만 선택 가능)
  const parkingOptions = ["무료주차", "유료주차", "주차불가"];

  // ✅ 모달이 열릴 때 기존 값 동기화 (모달이 열릴 때마다 초기화)
  useEffect(() => {
    if (isOpen) {
      setSelectedServices(selectedOptions);
    }
  }, [isOpen, selectedOptions]);

  // ✅ 주차 옵션 선택 시 기존 주차 옵션 제거 후 새로운 값만 추가
  const toggleParking = (option: string) => {
    setSelectedServices((prev) => {
      // 기존 주차 옵션 제거
      const filtered = prev.filter((item) => !parkingOptions.includes(item));

      // 새로 선택된 주차 옵션 추가
      return [...filtered, option];
    });
  };

  const toggleOption = (option: string) => {
    setSelectedServices((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSave = () => {
    onSave(selectedServices); // ✅ ManagementPage.tsx로 변경된 값 전달
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose} />
        <Title>서비스 및 환경</Title>

        <SectionTitle>주차</SectionTitle>
        <TagContainer>
          {["무료주차", "유료주차", "주차불가"].map((item) => (
            <Tag
              key={item}
              selected={selectedServices.includes(item)} // ✅ 선택된 상태 반영
              onClick={() => toggleParking(item)}
            >
              {item}
            </Tag>
          ))}
        </TagContainer>

        <SectionTitle>화장실</SectionTitle>
        <TagContainer>
          {["남/녀 화장실 구분"].map((item) => (
            <Tag
              key={item}
              selected={selectedServices.includes(item)} // ✅ 선택된 상태 반영
              onClick={() => toggleOption(item)}
            >
              {item}
            </Tag>
          ))}
        </TagContainer>

        <SectionTitle>서비스</SectionTitle>
        <TagContainer>
          {["고기 구워드려요", "이용시간 제한있어요"].map((item) => (
            <Tag
              key={item}
              selected={selectedServices.includes(item)} // ✅ 선택된 상태 반영
              onClick={() => toggleOption(item)}
            >
              {item}
            </Tag>
          ))}
        </TagContainer>

        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default ServiceEditModal;
export {}

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
  padding: 40px;
  border-radius: 12px;
  width: 600px;
  height: 587px;
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

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #efeedf;
  margin-bottom: 30px;
  margin-left: 50px;
  margin-top: 30px;
  align-self: flex-start;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
  align-self: flex-start;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 50px;
  align-self: flex-start;
`;

const Tag = styled.div<{ selected: boolean }>`
  padding: 8px 12px;
  font-size: 14px;
  background: ${({ selected }) => (selected ? "#FFF" : "#323230")};
  color: ${({ selected }) => (selected ? "#000" : "#FFF")};
  border-radius: 20px;
  cursor: pointer;
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
