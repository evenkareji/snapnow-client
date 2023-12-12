import React from 'react';
import Link from 'next/link';
import MenuContainer from '../atoms/MenuContainer';

const MenuItem = ({ icon, label, href }) => (
  <Link href={href}>
    <MenuContainer>
      {icon}
      <div>{label}</div>
    </MenuContainer>
  </Link>
);

export default MenuItem;
