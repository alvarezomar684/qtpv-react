import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./NavBar";
import MenuButton from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <h2 className="mt-3 mr-2" >  Menu</h2>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;
