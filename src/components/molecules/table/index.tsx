import { Body } from './Body';
import { Header } from './Header';
import { Pagination } from '@components/molecules/Pagination';
import {
  IExtractorObject,
  ITableProps,
} from '@components/molecules/table/defaultSettings';
import { Container, ContainerTable } from './styles';

export const Table = <T extends IExtractorObject>({
  columns,
  rows,
  rowsProps,
}: ITableProps<T>) => {
  return (
    <>
      <Container>
        <ContainerTable>
          <Header columns={columns} />
          <Body columns={columns} rows={rows} rowsProps={rowsProps} />
        </ContainerTable>
      </Container>
      {rowsProps.total! > 0 && <Pagination total={rowsProps.total} />}
    </>
  );
};
