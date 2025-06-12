import React from 'react';

import { navLinks } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Logo from '@/shared/Logo/Logo';

import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between lg:justify-normal">
      <div className="lg:w-[20%]">
        <Logo />
      </div>
      <div className="hidden w-[60%] items-center justify-center gap-7 lg:flex">
        {navLinks.map((navLink) => (
          <NavigationItem
            className="hover:text-button-primary"
            menuItem={navLink}
            key={navLink.id}
          />
        ))}
      </div>
      <div className="flex items-center justify-end lg:w-[20%]">
        <ButtonPrimary
          href="/#"
          sizeClass="px-6 py-4"
          className="hidden self-center lg:block"
        >
          Get the App
        </ButtonPrimary>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
