import * as React from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { MenuButton, StyledMenuItem, StyledMenu } from "./Category.styles";
import { CartItemType, ProductsProps } from "../App";

type Props = {
  category?: string;
  value?: string;
  handleCategoryTitle: (arg: string) => void;
};

const CategoryMenu: React.FC<Props> = ({ handleCategoryTitle }) => {
  const [category, setCategory] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const queryClient = useQueryClient();

  const handleSetCategory = (category: string) => {
    handleCategoryTitle(category);
    setCategory(category);
    const currentCategory = queryClient.getQueryData<ProductsProps>("products");
    console.log(currentCategory);
    if (category != "all") {
      const currentProductsCategory = currentCategory?.originalProducts.filter(
        (item) => item.category == category
      );
      queryClient.setQueryData("products", {
        ...currentCategory,
        products: currentProductsCategory,
      });
      setAnchorEl(null);
      return;
    }
    queryClient.setQueryData("products", {
      ...currentCategory,
      products: currentCategory?.originalProducts,
    });
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Category
      </MenuButton>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <StyledMenuItem onClick={() => handleSetCategory("all")}>
          All
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSetCategory("electronics")}>
          Eletronics
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSetCategory("jewelery")}>
          Jewlery
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSetCategory("men's clothing")}>
          Men's Clothing
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSetCategory("women's clothing")}>
          Women's Clothing
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default CategoryMenu;
