import { PropsWithChildren } from 'react';

interface IHeaderProps {
  list: any[];
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
}

export const Header = (props: PropsWithChildren<IHeaderProps>) => {
  return (
    <thead>
      {props.list.map((col, index) => (
        <td key={props.keyExtractor(index)}>{props.labelExtractor(col)}</td>
      ))}
    </thead>
  );
};
