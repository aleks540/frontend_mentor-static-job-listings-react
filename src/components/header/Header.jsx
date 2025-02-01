import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeaderSVG from "../../img/bg-header-mobile.svg";
import DesktopHeaderSVG from "../../img/bg-header-desktop.svg";
import  "./Header.css";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 375px)");
  /*   const mobileSVG = "../../img/bg-header-mobile.svg";
    const desktopSVG = "../../img/bg-header-desktop.svg";  */ 

    return (
        <div className='header'>
        <img
        src={isMobile ? MobileHeaderSVG : DesktopHeaderSVG}
        alt="Header SVG"
        className="w-full"
      />
      </div>

    )
}

export default Header