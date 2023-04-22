import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <div className="wrapper" data-testid="layout-container">
    <Header />
    <Outlet />
  </div>
);
export default Layout;
