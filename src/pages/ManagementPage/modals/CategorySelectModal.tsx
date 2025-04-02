import React, { useState } from "react";
import styled from "styled-components";
import { useCategoryStore } from "../../../stores/category";
import closeImage from "../../../assets/images/close.png";

interface CategorySelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newCategories: string[]) => void;
  selectedCategories: string[]; // 여기에 추가!
}

const CategorySelectModal: React.FC<CategorySelectModalProps> = ({ isOpen, onSave, onClose }) => {
  const { categories, categoryIcons, setCategories } = useCategoryStore();
  const [selected, setSelected] = useState<string[]>(categories);

  const handleCategoryClick = (category: string) => {
    setSelected((prev) => {
      if (prev.includes(category)) return prev.filter((c) => c !== category);
      return prev.length < 3 ? [...prev, category] : prev;
    });
  };

  const handleSelectChanges = () => {
    setCategories(selected);
    onSave(selected);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={onClose}/>
        <TextContainer>
          <Title>업종선택</Title>
          <Explain>최대3개 선택가능</Explain>
        </TextContainer>
        <CategoryGrid>
          {
            Object.keys(categoryIcons).map((cat) => {
            const isSelected = selected.includes(cat);
            return (
              <CategoryContainer key={cat}> 
                <CategoryButton selected={isSelected} onClick={() => handleCategoryClick(cat)}>
                  <CategoryImage src={categoryIcons[cat]} alt={cat} />
                </CategoryButton>
                <CategoryName selected={isSelected}>{cat}</CategoryName>
              </CategoryContainer>
      );
    })
          }
        </CategoryGrid>
        <SaveButton onClick={handleSelectChanges}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default CategorySelectModal;

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
  top: 30px;
  right: 30px;
  background: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 90px;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #EFEEDF;
`

const Explain = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #A8A7A1;
  margin-top: 15px;
  margin-left: 10px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); 
  gap: 15px;  
  justify-content: center;
  margin-top: 70px;
  width: 610px;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? "#ffcc00" : "#222")};
  border: none;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CategoryImage = styled.img`
  width: 32px;
  height: 32px;
`;

const CategoryName = styled.div<{ selected: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#ffcc00" : "#EFEEDF")};
  margin-top: 5px;
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
`;