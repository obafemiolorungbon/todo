import { useState } from "react";
import { bottomLinks, navLinks } from "./navlinks";
import {
  SideBarBottomLinks,
  SideBarBottomLinksWrapper,
  SideBarLinks,
  SideBarLinksWrapper,
  SideBarLogo,
  SideBarWrapper,
} from "./styles";

export const SideNav = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <SideBarWrapper>
      <SideBarLogo href="/dashboard">Bookr.co</SideBarLogo>
      <SideBarLinksWrapper>
        {navLinks.map((link, index) => (
          <SideBarLinks
            onClick={() => setActiveNav(link.name)}
            active={activeNav === link.name}
            key={index}
          >
            <link.icon></link.icon>
            <span>{link.name}</span>
          </SideBarLinks>
        ))}
      </SideBarLinksWrapper>

      <SideBarBottomLinksWrapper>
        {bottomLinks.map((link) => (
          <SideBarBottomLinks
            onClick={() => setActiveNav(link.name)}
            active={activeNav === link.name}
          >
            <link.icon></link.icon>
            <span>{link.name}</span>
          </SideBarBottomLinks>
        ))}
      </SideBarBottomLinksWrapper>
    </SideBarWrapper>
  );
};
