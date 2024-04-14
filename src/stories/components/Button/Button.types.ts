/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
interface ButtonProps {
  backgroundColor?: string;
  size?: 'mobile' | 'normal';
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  'data-testid'?: string;
}

export type { ButtonProps };