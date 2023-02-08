import { Outlet } from 'react-router-dom';
import { ListWrapper } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
export const Layout = () => {
  return (
    <ListWrapper>
      <AppBar />
      <Outlet />
    </ListWrapper>
  );
};
