import { useMemo } from 'react';

import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@/components/atoms/Error';

import { DefaultSettings } from '../defaultSettings';
import { ContainerFile, ContainerIcon, DropZone } from './styles';

interface IFileProps extends DefaultSettings {
  label?: string;
  isRequired?: boolean;
}

export const File = ({ label, isRequired, form, name }: IFileProps) => {
  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

  return (
    <ContainerFile>
      <Label text={label} isRequired={isRequired} />

      <DropZone htmlFor='field-file'>
        <ContainerIcon>
          <Icon name='image' size='lg' color='#366EC2' />
        </ContainerIcon>
        <span>Selecione um arquivo</span>
      </DropZone>

      <input id='field-file' type='file' {...form.register(name)} />
      {error?.message && <ErrorComponent text={error.message} />}
    </ContainerFile>
  );
};
