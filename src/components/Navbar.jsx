import React, { useContext } from 'react'
import { NavbarContext } from '../context/NavbarContext';
import { ClientNavbar } from './ClientNavar';
import { SellerNavbar } from './SellerNavbar';
import { PublicNavbar } from './PublicNavbar';

export const Navbar = () => {
    const { navbarType } = useContext(NavbarContext);

  switch (navbarType) {
    case 'client':
      return <ClientNavbar />;
    case 'seller':
      return <SellerNavbar />;
    default:
      return <PublicNavbar />;
  }
}
