import { create } from "zustand";

//store의 type 정의
interface RestaurantState {
  name: string;                       //가게명
  address: string;                    // 가게주소
  category: string[];                 //업종
  pictures: string[];                 //업체 사진
  line_description: string;           //한 줄 소개 - 최대 20자
  description: string;                //상세 소개 - 최대 150자
  service_and_information: string[]; //서비스 및 환경
  setField: (field: keyof RestaurantState, value: string | string[] | null) => void; // 상태 업데이트 함수
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  name: "",
  address: "",
  category: [],
  pictures: [],
  line_description: "",
  description: "",
  service_and_information: [],
  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
}));