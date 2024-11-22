import React, { useContext } from 'react';
import { ClientNavbar } from './Cliente/ClientNavbar';
import { SellerNavbar } from './Seller/SellerNavbar';
import { PublicNavbar } from './PublicNavbar';
import { NavbarContext } from '../context/NavbarProvider';

export const Navbar = () => {
  const { rol } = useContext(NavbarContext);

  switch (rol) {
    case 'CLIENTE':
      return <ClientNavbar />;
    case 'VENDEDOR':
      return <SellerNavbar />;
    default:
      return <PublicNavbar />;
  }
}

