import * as React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { MenuButton, StyledMenuItem, StyledMenu } from "./Category.styles";

type Props = {
  category?: string;
  value?: string;
};

const CategoryMenu: React.FC<Props> = () => {
  const [category, setCategory] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetCategory = (category: string) => {
    setCategory(category);
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
        <StyledMenuItem onClick={() => handleSetCategory("eletronics")}>
          Eletronics
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSetCategory("jewlery")}>
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
