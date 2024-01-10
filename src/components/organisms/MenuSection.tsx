import styled from '@emotion/styled';
import MenuItemHeading from '../atoms/MenuItemHeading';
import MenuItem from '../molecules/MenuItem';

const MenuSection = ({ heading, items }) => (
  <SBoxMenuItem>
    <MenuItemHeading>{heading}</MenuItemHeading>
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </SBoxMenuItem>
);
const SBoxMenuItem = styled.div`
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  margin-top: 16px;
  padding-bottom: 18px;
`;
export default MenuSection;
