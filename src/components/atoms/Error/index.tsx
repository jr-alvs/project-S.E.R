import { ErrorStyle } from './styles';

interface IErrorProps {
  text?: string;
}

export const ErrorComponent = ({ text }: IErrorProps) => {
  return <ErrorStyle>{text}</ErrorStyle>;
};
