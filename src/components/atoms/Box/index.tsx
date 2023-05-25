import { PropsWithChildren } from 'react';
import { ContainerBox } from './styles';

interface IBoxProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const Box = ({
  children,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: PropsWithChildren<IBoxProps>) => {
  return (
    <ContainerBox
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
    >
      {children}
    </ContainerBox>
  );
};
