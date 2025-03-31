import { create } from "zustand";

import chicken from "../assets/images/category-icons/chicken.png";
import pizza from "../assets/images/category-icons/pizza.png";
import burger from "../assets/images/category-icons/burger.png";
import chinese from "../assets/images/category-icons/chinese.png";
import asian from "../assets/images/category-icons/asian.png";
import sushi from "../assets/images/category-icons/sushi.png";
import soup from "../assets/images/category-icons/soup.png";
import snack from "../assets/images/category-icons/snack.png";
import jokbal from "../assets/images/category-icons/jokbal.png";
import meat from "../assets/images/category-icons/meat.png";
import korean from "../assets/images/category-icons/korean.png";
import japanese from "../assets/images/category-icons/japanese.png";
import western from "../assets/images/category-icons/western.png";

interface CategoryState {
  categories: string[];
  setCategories: (categories: string[]) => void;
  categoryIcons: { [key: string]: string };
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
  categoryIcons: {
    "치킨": chicken,
    "피자": pizza,
    "햄버거": burger,
    "중식": chinese,
    "아시안": asian,
    "초밥": sushi,
    "국밥": soup,
    "분식": snack,
    "족발": jokbal,
    "고기": meat,
    "한식": korean,
    "일식": japanese,
    "양식": western,
  },
}));
