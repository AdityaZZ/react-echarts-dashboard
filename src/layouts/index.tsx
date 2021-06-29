import { IRouteComponentProps } from 'umi';

import NavHeader from './NavHeader';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <NavHeader />
      {children}
    </>
  );
}
