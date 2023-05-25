import { Icon } from '../../../atoms/Icon';
import { Label } from '../../../atoms/Label';
import { ContainerSearch, SearchStyle, ButtonSearch } from './styles';

interface ISearchProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  isRequired?: boolean;
}

export const Search = ({
  label,
  placeholder,
  type,
  isRequired,
}: ISearchProps) => {
  return (
    <div>
      <Label text={label} isRequired={isRequired} />

      <ContainerSearch>
        <SearchStyle placeholder={placeholder} type={type} />

        <ButtonSearch onClick={() => {}}>
          <Icon name='search' color='#fff' />
        </ButtonSearch>
      </ContainerSearch>
    </div>
  );
};
