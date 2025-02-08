import React, {useState} from "react";
import styled from "styled-components";
import { useApplyStore } from "../../stores/apply";
import uploadImg from "../../assets/images/upload.png";
import moreSee from "../../assets/images/moreSee.png";
import check from "../../assets/images/check.png";
import { businessNumberCheckHandler } from "../../apis/business";

type ApplyStoreState = ReturnType<typeof useApplyStore.getState>;

const ApplyPage: React.FC = () => {
  const {
    business_number,
    owner_name,
    owner_phone_number,
    store_name,
    business_registration_certificate,
    agree,
    setField,
  } = useApplyStore();

  const [businessCheck, setBusinessCheck] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("form 데이터 제출: ", {
      business_number,
      owner_name,
      owner_phone_number,
      store_name,
      business_registration_certificate,
      agree,
    });
  //제출 API 호출
  //// FormData 생성
  //const formData = new FormData();

  //// 파일 데이터 추가
  //if (business_registration_certificate) {
  //  formData.append(
  //    "business_registration_certificate",
  //    business_registration_certificate
  //  );
  //}

  
  //try {
  //  const response = await fetch("/api/submit", {
  //    method: "POST",
  //    body: formData, // FormData 객체를 직접 전송
  //  });

  //  if (response.ok) {
  //    console.log("파일 업로드 성공");
  //  } else {
  //    console.error("업로드 실패");
  //  }
  //} catch (error) {
  //  console.error("네트워크 오류:", error);
  //}
  };

  const handleChange = (field: keyof ApplyStoreState) => 
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     if (field === "business_registration_certificate") {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        setField(field, file); // Store the file in state
      } else {
        // Reset the field if file is canceled (i.e., no file selected)
        setField(field, null);
      }
    } else {
       let value = event.target.value;
       setField(field, value);
    }
    };
  
  const handleCheckboxChange = (event: React.MouseEvent) => {
    event.preventDefault();
    setField("agree", !agree);
  };

  const checkBusinessNumber = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!validateBusinessNumber(business_number)) {
      alert("사업자등록번호를 올바른 형식으로 입력해주세요.");
      return;
    }
    else {
      // TODO: 사업자등록번호 조회 API 호출
      try {
        let number = business_number.replaceAll('-', '')
        console.log(number);
        const response = await businessNumberCheckHandler(number);
        if (response === '인증되었습니다.') {
          alert(response);
          setBusinessCheck(true);
        }
        else {
          alert("사업자등록번호를 다시 한번 확인해 주시길 바랍니다.");
        }

      } catch (error) {
        console.error("사업자등록번호 조회 실패: ", error);
        alert("사업자등록번호 조회 중 오류가 발생했습니다.");
      }
    }
  }

  const validateBusinessNumber = (business_number: string) => {
    const regex = /^\d{3}-\d{2}-\d{5}$/; // 사업자 등록번호 형식 (예: 123-45-67890  )
    return regex.test(business_number);
  }

  const validatePhoneNumber = (phone_number: string) => {
    const regex = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식 (예: 010-1234-5678)
    return regex.test(phone_number);
  }

  const validateForm = () => {
    return (
      business_number && validateBusinessNumber(business_number) && businessCheck &&
      owner_name &&
      owner_phone_number && validatePhoneNumber(owner_phone_number) &&
      store_name &&
      business_registration_certificate &&
      agree
    )
  }
  
  return (
    <ApplyPageContainer onSubmit={handleSubmit}>
      <ApplyTitle>온라인 입점신청</ApplyTitle>
      <ApplySubTitle>기본 정보를 입력해주세요</ApplySubTitle>
      <ApplySubTitle>당담자가 확인 후 등록을 도와드릴게요</ApplySubTitle>
      <FormContainer>

        <FormGroup>
          <Label>사업자등록번호</Label>
          <FindBusinessNumberContainer>
            <Input type="text" value={business_number} onChange={handleChange("business_number")} placeholder="예) 123-45-67890" className="business_number"/>
            <FindBusinessNumberBtn onClick={checkBusinessNumber}>번호조회</FindBusinessNumberBtn>
          </FindBusinessNumberContainer>
          
        </FormGroup>

        <FormGroup>
          <Label>대표자명</Label>
          <Input type="text" value={owner_name} onChange={handleChange("owner_name")} placeholder="예) 홍길동"/>
        </FormGroup>

        <FormGroup>
          <Label>대표자 휴대폰 번호</Label>
          <Input type="text" value={owner_phone_number} onChange={handleChange("owner_phone_number")} placeholder="예) 010-1234-5678"/>
        </FormGroup>

        <FormGroup>
          <Label>가게명</Label>
          <Input type="text" value={store_name} onChange={handleChange("store_name")} placeholder="예) 꽥 분식점"/>
        </FormGroup>

         <FormGroup>
          <Label>사업자등록증 사본</Label>
          <FileUploadBox>
            <UploadImg src={uploadImg} />
             {business_registration_certificate ? business_registration_certificate.name : "파일 첨부하기"}
            <Input
              type="file"
              onChange={handleChange("business_registration_certificate")}
            />
          </FileUploadBox>
        </FormGroup>

        <FormGroup>
          <Label>개인정보 수집 및 이용 동의
            <MoreSeeImg src={moreSee} />
          </Label>
          <AgreeBtn onClick={handleCheckboxChange}>
            <CheckImg className={agree ? "checked" : ""} src={check} />
            <CheckText className={agree ? "checked" : ""}>개인정보 수집 및 이용 동의 (필수)</CheckText>
          </AgreeBtn>
        </FormGroup>

        <SubmitBtn disabled={!validateForm()}>신청하기</SubmitBtn>

      </FormContainer>
    </ApplyPageContainer>
  );
};

const ApplyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ApplyTitle = styled.div`
  font-size: 2rem;
  color: #EFEEDF;
  font-weight: bold;
  margin-bottom: 10px;
`

const ApplySubTitle = styled.div`
  font-size: 1rem;
  color: #A8A7A1;
  font-weight: bold;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: 50px;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 1.1rem;
  color: #EFEEDF;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #A8A7A1;
  background-color: #21211D;
  color: #EFEEDF;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;

  &::placeholder {
    color: #A8A7A1;
  }

  &.checkbox {
    display: none;
  }

  &.business_number {
    width: 290px; 
  }
`;

const FileUploadBox = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #A8A7A1;
  background-color: #21211D;
  color: #EFEEDF;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #2a2a2a;
    color: #efeedf;
  }

  input[type="file"] {
    position: relative;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const UploadImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

const SubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "#A8A7A1" : "#EFD800")};
  color: #21211D;
  font-size: 1rem;
  font-weight: bold;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};  /* 클릭을 막기 위해 추가 */
`

const AgreeBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #A8A7A1;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #21211D;
  color: #EFEEDF;
  margin-top: 10px;
`
const MoreSeeImg = styled.img`
  width: 9.77px;
  height: 12.72px;
  margin-left: 5px;
`

const CheckImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;

  &.checked {
    filter: drop-shadow(0 0 0 #FFF);
  }
`

const CheckText = styled.span`
  font-size: 1rem;
  color: #A8A7A1;
  font-weight: bold;

  &.checked {
    color: #EFEEDF;
  }
`

const FindBusinessNumberContainer = styled.div`
  display: flex;
  align-items: center;
`

const FindBusinessNumberBtn = styled.button`
  width: 110px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #A8A7A1;
  color: #21211D;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1rem;
  font-weight: bold;
`

export default ApplyPage;