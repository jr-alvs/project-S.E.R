import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';
import { DefaultSettings } from '@components/molecules/inputs/defaultSettings';
import { ContainerSearch, SearchStyle, ButtonSearch } from './styles';

interface ISearchProps extends DefaultSettings {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  handleClick?: (text: string) => void;
}

export const Search = ({
  label,
  placeholder,
  type,
  form,
  name,
  handleClick,
}: ISearchProps) => {
  const value = form.watch(name);

  return (
    <div>
      <Label text={label} />
      <ContainerSearch>
        <SearchStyle
          placeholder={placeholder}
          type={type}
          {...form.register(name)}
        />
        <ButtonSearch onClick={() => handleClick?.(value)}>
          <Icon name='search' color='#fff' />
        </ButtonSearch>
      </ContainerSearch>
    </div>
  );
};
