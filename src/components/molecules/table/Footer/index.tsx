interface IFooterProps {
  list: any[];
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
}

export const Footer = ({
  list,
  keyExtractor,
  labelExtractor,
}: IFooterProps) => {
  return (
    <tfoot>
      <tr>
        {list.map((col, index) => (
          <td key={keyExtractor(index)}>{labelExtractor(col)}</td>
        ))}
      </tr>
    </tfoot>
  );
};
