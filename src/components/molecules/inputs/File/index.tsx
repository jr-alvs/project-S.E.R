import { ContainerFile, ContainerIcon, DropZone } from './styles';
import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';
import { DefaultSettings } from '../defaultSettings';

interface IFileProps extends DefaultSettings {
  label?: string;
  isRequired?: boolean;
}

export const File = ({ label, isRequired, form, name }: IFileProps) => {
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
    </ContainerFile>
  );
};
