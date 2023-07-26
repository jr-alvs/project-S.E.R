import { Icon } from '@components/atoms/Icon';
import { IDefaultProps } from '@components/molecules/buttons/defaultSettings';
import { DefaultStyle } from './styles';

export const Default = ({
  text,
  background,
  color,
  size,
  startIcon,
  endIcon,
  click,
  isLoading,
}: IDefaultProps) => {
  return (
    <DefaultStyle
      $color={color}
      $background={background}
      $size={size}
      onClick={click}
    >
      {' '}
      {isLoading ? (
        <span>carregando...</span>
      ) : (
        <>
          {startIcon && <Icon name={startIcon} color={color} />}
          {text}
          {endIcon && <Icon name={endIcon} color={color} />}
        </>
      )}
    </DefaultStyle>
  );
};
