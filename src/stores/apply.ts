import { create } from "zustand";

//store의 type 정의
interface ApplyState {
  business_number: string; //사업자등록번호
  owner_name: string; // 대표자명
  owner_phone_number: string; //대표자 휴대폰 번호
  store_name: string; //가게명
  business_registration_certificate: File | null; //사업자등록증 사본
  agree: boolean; //개인정보 수집 및 이용 동의
  setField: (field: keyof ApplyState, value: string | boolean | File | null) => void; // 상태 업데이트 함수
}

export const useApplyStore = create<ApplyState>((set) => ({
  business_number: "",
  owner_name: "",
  owner_phone_number: "",
  store_name: "",
  business_registration_certificate: null,
  agree: false,
  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
}));