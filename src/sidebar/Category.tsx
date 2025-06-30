import type React from "react";
import CategoryInfo from "./CategoryInfo";

interface updateFoodList {
  setFoodList: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<updateFoodList> = ({ setFoodList }) => {
  return (
    <CategoryInfo setFoodList={setFoodList} />
  );
};

export default Category;
