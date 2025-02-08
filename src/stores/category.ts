import { create } from "zustand";

interface CategoryState{
  categories: string[];
  setCategories: (categories: string[]) => void;
  categoryIcons: { [key: string]: string };
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  categoryIcons: {
    "치킨":   require("../assets/images/category-icons/chicken.png"),
    "피자":   require("../assets/images/category-icons/pizza.png"),
    "햄버거": require("../assets/images/category-icons/burger.png"),
    "중식":   require("../assets/images/category-icons/chinese.png"),
    "아시안": require("../assets/images/category-icons/asian.png"),
    "초밥":   require("../assets/images/category-icons/sushi.png"),
    "국밥":   require("../assets/images/category-icons/soup.png"),
    "분식":   require("../assets/images/category-icons/snack.png"),
    "족발":   require("../assets/images/category-icons/jokbal.png"),
    "고기":   require("../assets/images/category-icons/meat.png"),
    "한식":   require("../assets/images/category-icons/korean.png"),
    "일식":   require("../assets/images/category-icons/japanese.png"),
    "양식":   require("../assets/images/category-icons/western.png"),
  },
}));