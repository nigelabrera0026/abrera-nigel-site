/**
 * Navigation bar component.
 * @author    Nigel Abrera
 * @date      April 30, 2024
 */
import styled, { css } from 'styled-components';
import { Text } from '../../base_components/Text';
import { Dropdown } from '../Dropdown/Dropdown';
import { NavigationBarProps } from './NavigationBar.types';

const ListContainer = styled.ul<NavigationBarProps>`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: fit-content;
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `};
`;

const NameHolder = styled.li<NavigationBarProps>`
  float: left;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const DropHolder = styled.li<NavigationBarProps>`
  float: right;
  align-items: center;
`;

const TextStyling = styled(Text)<{ size?: 'mobile' | 'normal' }>`
  text-align: center;
  padding: 14px 16px;
  ${({size}) => size === 'mobile' ? css`
    font-size: 10px;
  ` : css`
    font-size: 20px; 
  `}
`;

const NavigationBar = ({
  size = 'normal',
  backgroundColor,
  disabled = false,
}: NavigationBarProps) => {
  return (
    <ListContainer
      data-testid={"NavBar"}
      size={size}
      backgroundColor={backgroundColor}
      disabled={disabled}  
    >
      <NameHolder>
        <TextStyling size={size} children="Nigel"/>
      </NameHolder>
      <DropHolder>
        <Dropdown size={size} />
      </DropHolder>
    </ListContainer>
  );
};

export { NavigationBar };