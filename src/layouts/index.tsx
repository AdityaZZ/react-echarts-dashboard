import { connect, IRouteComponentProps, GlobalModelState } from 'umi';

import NavHeader from './NavHeader';

function Layout(props: IRouteComponentProps) {
  const {
    children,
    global: { activePath },
  } = props;
  return (
    <>
      <NavHeader activePath={activePath} />
      <div className="page-content">{children}</div>
    </>
  );
}

export default connect(({ global }: { global: GlobalModelState }) => ({
  global,
}))(Layout);
