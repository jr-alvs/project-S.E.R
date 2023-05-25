import { Icon } from '../../../atoms/Icon';
import { IDefaultProps, sizes } from '../default-settings';
import { DefaultStyle } from './styles';

export const Default = ({
  text,
  background,
  color,
  size,
  startIcon,
  endIcon,
}: IDefaultProps) => {
  return (
    <DefaultStyle
      $color={color}
      $background={background}
      $size={sizes[size ?? 'md']}
    >
      {startIcon && <Icon name={startIcon} color={color} />}
      {text}
      {endIcon && <Icon name={endIcon} color={color} />}
    </DefaultStyle>
  );
};
