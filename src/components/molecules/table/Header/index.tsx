import { PropsWithChildren } from 'react';

interface IHeaderProps {
  list: any[];
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
}

export const Header = ({
  children,
  list,
  keyExtractor,
  labelExtractor,
}: PropsWithChildren<IHeaderProps>) => {
  return (
    <table>
      <thead>
        <tr>
          {list.map((col, index) => (
            <th key={keyExtractor(index)}>{labelExtractor(col)}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};
