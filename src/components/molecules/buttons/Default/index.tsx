import { Icon } from '@components/atoms/Icon';
import { IDefaultProps, sizes } from '../defaultSettings';
import { DefaultStyle } from './styles';

export const Default = ({
  text,
  type,
  background,
  color,
  size,
  startIcon,
  endIcon,
  click,
}: IDefaultProps) => {
  return (
    <DefaultStyle
      type={type}
      $color={color}
      $background={background}
      $size={sizes[size ?? 'md']}
      onClick={click}
    >
      {startIcon && <Icon name={startIcon} color={color} />}
      {text}
      {endIcon && <Icon name={endIcon} color={color} />}
    </DefaultStyle>
  );
};
