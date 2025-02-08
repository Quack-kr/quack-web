import React, { useState, useEffect } from "react";
import styled from "styled-components";
import closeImage from "../../../assets/images/close.png";
import cameraImg from "../../../assets/images/camera.png"

interface ImageEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (images: string[]) => void;
  existingImages: string[]; // 기존 저장된 이미지
}

const ImageEditModal: React.FC<ImageEditModalProps> = ({ isOpen, onClose, onSave, existingImages }) => {
  const [images, setImages] = useState<string[]>(existingImages ?? []);

  const MAX_PICTURES = 5;

  // ✅ 모달이 열릴 때 기존 이미지 동기화
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setImages(existingImages ?? []);
      }, 0); // 즉시 반영
    }
  }, [isOpen, existingImages]);

  // ✅ 기존 URL을 해제하여 메모리 누수 방지
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img));
    };
  }, [images]);

  // ✅ 파일 업로드 핸들러
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    
    setImages((prev) => [...prev, ...newImages].slice(0, MAX_PICTURES));
  };

  // ✅ 파일 제거 핸들러
  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

 // ✅ 저장 버튼을 눌러야만 ManagementPage에 반영되도록 변경
  const handleSave = () => {
    onSave(images); // ✅ 이제 여기서만 onSave 실행됨
    onClose();
  };

  // ✅ X 버튼 클릭 시 변경사항을 저장하지 않도록 변경
  const handleClose = () => {
    setImages(existingImages); // ✅ 기존 이미지로 되돌림
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <CloseButton src={closeImage} onClick={handleClose} />
        <RowContainer>
          <Title>업체사진</Title>
          <SubText>최대 5장</SubText>
        </RowContainer>
        <ImageContainer>
          {images.length > 0 ? (
            <>
              {images.map((pic, index) => (
                <ImagePlaceholder key={pic} onClick={() => handleRemoveImage(index)}>
                  <img
                    src={pic}
                    alt={`업체사진-${index}`}
                    style={{ width: 80, height: 80, borderRadius: 8, objectFit: "cover" }}
                  />
                </ImagePlaceholder>
              ))}
              {/* ✅ 5개 이하일 경우 빈 ImagePlaceholder 추가 */}
              {Array.from({ length: MAX_PICTURES - images.length }).map((_, index) => (
                <ImagePlaceholder key={`empty-${index}-${Math.random()}`} />
              ))}
            </>
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
        </ImageContainer>

        <FileUploadButton htmlFor="file-upload">
          📂 파일 첨부하기
        </FileUploadButton>
        <HiddenFileInput id="file-upload" type="file" multiple onChange={handleFileChange} />

        <SaveButton onClick={handleSave}>저장하기</SaveButton>
      </Modal>
    </Overlay>
  );
};

export default ImageEditModal;
export { }

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
  padding: 60px;
  border-radius: 12px;
  width: 784px;
  height: 482px;
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

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  margin-left: 30px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #EFEEDF;
  align-self: flex-start;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #A8A7A1;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 17px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 20px;
`;

const Camera = styled.img`
  width: 25px;
  height: 20px;
`

const Explain = styled.div`
  color: #A8A7A1;
  font-size: 16px;
  margin-top: 10px;

  &.camera {
    font-size: 12px;
  }
`

const ImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background: #21211D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #A8A7A1;
  margin-right: 10px;
  cursor: pointer;
`;

const FileUploadButton = styled.label`
  width: 380px;
  height: 56px;
  padding: 12px;
  background: #21211D;
  border: 1px solid #A8A7A1;
  border-radius: 8px;
  color: #FFF;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SaveButton = styled.button`
  background: #EFD800;
  border: none;
  padding: 12px;
  width: 380px;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #171714;
  font-weight: bold;
  margin-top: 8%;
`;