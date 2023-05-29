interface IBodyProps {
  list: any[];
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
}

export const Body = ({ list, keyExtractor, labelExtractor }: IBodyProps) => {
  return (
    <tbody>
      <tr>
        {list.map((col, index) => (
          <td key={keyExtractor(index)}>{labelExtractor(col)}</td>
        ))}
      </tr>
    </tbody>
  );
};
