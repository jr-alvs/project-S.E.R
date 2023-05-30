import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';
import { ContainerSearch, SearchStyle, ButtonSearch } from './styles';
import { DefaultSettings } from '../defaultSettings';

interface ISearchProps extends DefaultSettings {
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
  form,
  name,
}: ISearchProps) => {
  return (
    <div>
      <Label text={label} isRequired={isRequired} />

      <ContainerSearch>
        <SearchStyle
          placeholder={placeholder}
          type={type}
          {...form.register(name)}
        />

        <ButtonSearch onClick={() => {}}>
          <Icon name='search' color='#fff' />
        </ButtonSearch>
      </ContainerSearch>
    </div>
  );
};
