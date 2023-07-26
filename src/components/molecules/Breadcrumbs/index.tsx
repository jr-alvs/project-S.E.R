import { ContainerBreadcrumbs, Link, Item } from './styles';

type TMenu = {
  label: string;
  path?: string;
};

interface IBreadcrumbsProps {
  menus: TMenu[];
}

export const Breadcrumbs = ({ menus }: IBreadcrumbsProps) => {
  return (
    <ContainerBreadcrumbs>
      {menus.map((menu) =>
        menu.path ? (
          <Link to={menu.path} key={menu.label}>
            {menu.label}
          </Link>
        ) : (
          <Item key={menu.label}>{menu.label}</Item>
        ),
      )}
    </ContainerBreadcrumbs>
  );
};
