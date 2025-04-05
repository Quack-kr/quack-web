import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cameraImg from "../../assets/images/camera.png";
import CategorySelectModal from "./modals/CategorySelectModal";
import NameEditModal from "./modals/NameEditModal";
import AddressEditModal from "./modals/AddressEditModal";
import LineDescriptionEditModal from "./modals/LineDescriptionModal";
import DescriptionEditModal from "./modals/DescriptionEditModal";
import ServiceEditModal from "./modals/ServiceEditModal";
import ImageEditModal from "./modals/ImageEditModal";
import { useRestaurantStore } from "../../stores/restaurant";
import { useCategoryStore } from "../../stores/category";

//가게사진 최대 이미지 개수
const MAX_PICTURES = 5;

type RestaurantState = ReturnType<typeof useRestaurantStore.getState>;

const BasicInformationPage: React.FC = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { categoryIcons } = useCategoryStore();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isNameEditModalOpen, setIsNameEditModalOpen] = useState(false);
  const [isAddressEditModalOpen, setIsAddressEditModalOpen] = useState(false);
  const [isLineDescriptionEditModalOpen, setIsLineDescriptionEditModalOpen] =
    useState(false);
  const [isDescriptionEditModalOpen, setIsDescriptionEditModalOpen] =
    useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  //테스트 데이터
  const [restaurant, setRestaurant] = useState({
    name: "꽥 분식점 1호",
    address: "서울특별시 왕십리로 31길 9 1층",
    category: ["일식", "초밥"],
    pictures: [] as string[],
    line_description: "",
    description: "",
    service_and_information: ["고기 구워드려요", "이용시간 제한있어요"],
  });

  useEffect(() => {
    if (!isImageModalOpen) return;
    setRestaurant((prev) => ({
      ...prev,
      pictures: restaurant.pictures, // 기존 images 상태를 동기화
    }));
  }, [restaurant.pictures, isImageModalOpen]);

  const handleSave = (type: string, newValue: string, reason?: string) => {
    setRestaurant((prev) => ({
      ...prev,
      [type]: newValue,
    }));
    console.log("새로운 값:", newValue);
    if (reason) {
      console.log("변경 사유:", reason);
    }
  };

  const handleSelectChanges = (newCategories: string[]) => {
    setRestaurant((prev) => ({
      ...prev,
      category: newCategories,
    }));
    console.log("변경된 카테고리:", newCategories);
  };

  return (
    <InformationCardContainer>
      <InformationCard>
        <Information>
          <SubTitle>가게명</SubTitle>
          <Explain>{restaurant.name}</Explain>
        </Information>
        <EditBtn onClick={() => setIsNameEditModalOpen(true)}>수정하기</EditBtn>
        <NameEditModal
          isOpen={isNameEditModalOpen}
          onClose={() => setIsNameEditModalOpen(false)}
          onSave={handleSave}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitle>주소</SubTitle>
          <Explain>{restaurant.address}</Explain>
        </Information>
        <EditBtn onClick={() => setIsAddressEditModalOpen(true)}>
          수정하기
        </EditBtn>
        <AddressEditModal
          isOpen={isAddressEditModalOpen}
          onClose={() => setIsAddressEditModalOpen(false)}
          onSave={handleSave}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitle>업종</SubTitle>
          <InfoBoxContainer>
            {restaurant.category.map((cat, index) => (
              <ColumnContainer key={index}>
                <CategoryBox>
                  <CategoryImage src={categoryIcons[cat]} alt={cat} />
                </CategoryBox>
                <CategoryName>{cat}</CategoryName>
              </ColumnContainer>
            ))}
          </InfoBoxContainer>
        </Information>
        <EditBtn
          onClick={() => {
            setIsCategoryModalOpen(true);
          }}
        >
          수정하기
        </EditBtn>
        <CategorySelectModal
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
          selectedCategories={restaurant.category}
          onSave={handleSelectChanges}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitleSection>
            <SubTitle>업체사진</SubTitle>
            <ExplainTitle>최대 5장</ExplainTitle>
          </SubTitleSection>
          <InfoBoxContainer>
            {restaurant.pictures.length > 0 ? (
              restaurant.pictures.map((pic, index) => (
                <ImagePlaceholder key={pic}>
                  <img
                    src={pic}
                    alt={`업체사진-${index}`}
                    style={{ width: 80, height: 80, borderRadius: 8 }}
                  />
                </ImagePlaceholder>
              ))
            ) : (
              <>
                <ImagePlaceholder>
                  <Camera src={cameraImg} />
                  <Explain className="camera">대표이미지</Explain>
                </ImagePlaceholder>
                {Array.from({ length: MAX_PICTURES - 1 }).map((_, index) => (
                  <ImagePlaceholder key={`empty-${index}-${Math.random()}`} />
                ))}
              </>
            )}
          </InfoBoxContainer>
        </Information>
        <EditBtn onClick={() => setIsImageModalOpen(true)}>수정하기</EditBtn>

        <ImageEditModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          existingImages={restaurant.pictures ?? []}
          onSave={(newImages) => {
            setRestaurant((prev) => ({
              ...prev,
              pictures: newImages, // ✅ 저장된 이미지 반영
            }));
          }}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitleSection>
            <SubTitle>한 줄 소개</SubTitle>
            <ExplainTitle>최대 20자</ExplainTitle>
          </SubTitleSection>
          <Explain>
            {restaurant.line_description || "등록된 내용이 없어요"}
          </Explain>
        </Information>
        <EditBtn
          onClick={() => {
            setIsLineDescriptionEditModalOpen(true);
          }}
        >
          수정하기
        </EditBtn>
        <LineDescriptionEditModal
          isOpen={isLineDescriptionEditModalOpen}
          onClose={() => setIsLineDescriptionEditModalOpen(false)}
          onSave={handleSave}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitleSection>
            <SubTitle>상세소개</SubTitle>
            <ExplainTitle>최대 150자 (텍스트박스 400x104)</ExplainTitle>
          </SubTitleSection>
          <Explain>{restaurant.description || "등록된 내용이 없어요"}</Explain>
        </Information>
        <EditBtn
          onClick={() => {
            setIsDescriptionEditModalOpen(true);
          }}
        >
          수정하기
        </EditBtn>
        <DescriptionEditModal
          isOpen={isDescriptionEditModalOpen}
          onClose={() => setIsDescriptionEditModalOpen(false)}
          onSave={handleSave}
        />
      </InformationCard>
      <Divider />
      <InformationCard>
        <Information>
          <SubTitle>서비스 및 환경</SubTitle>
          <InfoBoxContainer>
            {restaurant.service_and_information.map((info, index) => (
              <InfoBox key={index}>{info}</InfoBox>
            ))}
          </InfoBoxContainer>
        </Information>
        <EditBtn onClick={() => setIsServiceModalOpen(true)}>수정하기</EditBtn>
        <ServiceEditModal
          isOpen={isServiceModalOpen}
          onClose={() => setIsServiceModalOpen(false)}
          selectedOptions={restaurant.service_and_information}
          onSave={(newOptions) => {
            setRestaurant((prev) => ({
              ...prev,
              service_and_information: newOptions,
            }));
          }}
        />
      </InformationCard>
    </InformationCardContainer>
  );
};

export default BasicInformationPage;

const Divider = styled.div`
  width: 550px;
  border: 1px solid #525250;
  margin-top: 20px;
  margin-left: 40px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #222;
  color: white;
  border-radius: 25px;
  justify-content: center;
  font-size: 14px;
  margin-right: 10px;
`;

const CategoryImage = styled.img`
  width: 32px;
  height: 32px;
`;

const CategoryName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #a8a7a1;
  margin-top: 5px;
  margin-right: 10px;
`;

const SubTitleSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitle = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

const ExplainTitle = styled.div`
  color: #a8a7a1;
  font-size: 15px;
  left: 0;
  margin-left: 10px;
  margin-top: 5px;
`;
const Explain = styled.div`
  color: #a8a7a1;
  font-size: 16px;
  margin-top: 10px;

  &.camera {
    font-size: 12px;
  }
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

const InfoBox = styled.div`
  background-color: #323230;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  margin-right: 8px;
`;

const Camera = styled.img`
  width: 25px;
  height: 20px;
`;

const ImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: #21211d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #a8a7a1;
  margin-right: 10px;
  cursor: pointer;
`;
