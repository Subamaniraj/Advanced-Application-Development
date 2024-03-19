import React, { useState } from 'react';
import '../../assets/css/header.css';
import Sidebar from './Sidebar';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const closeSidebar = () => {
    setOpen(false);
};
const username =  "Guest";

  return (
    <header className="headerStyles">
      <div className="hamburgerWrapper" onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
      { (username == "Guest" ) && <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}/> }
    </header>
  );
};

export default Header;
