import { ContainerFile, ContainerIcon, DropZone } from './styles';
import { Icon } from '@components/atoms/Icon';
import { Label } from '@components/atoms/Label';

interface IFileProps {
  label?: string;
  isRequired?: boolean;
}

export const File = ({ label, isRequired }: IFileProps) => {
  return (
    <ContainerFile>
      <Label text={label} isRequired={isRequired} />
      <DropZone htmlFor='field-file'>
        <ContainerIcon>
          <Icon name='image' size='lg' color='#366EC2' />
        </ContainerIcon>
        <span>Selecione um arquivo</span>
      </DropZone>
      <input id='field-file' type='file' />
    </ContainerFile>
  );
};
