import React from 'react';
import { Hr } from '../atoms/Hr';
import MenuItemHeading from '../atoms/MenuItemHeading';
import MenuItem from '../molecules/MenuItem';

const MenuSection = ({ heading, items }) => (
  <div>
    <MenuItemHeading>{heading}</MenuItemHeading>
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
    <Hr />
  </div>
);

export default MenuSection;
