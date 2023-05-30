import { useMemo } from 'react';

import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@/components/atoms/Error';

import { DefaultSettings } from '../defaultSettings';
import { ContainerSearch, SearchStyle, ButtonSearch } from './styles';

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
  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

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

      {error?.message && <ErrorComponent text={error.message} />}
    </div>
  );
};
