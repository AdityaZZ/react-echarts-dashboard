/**
 * NavHeader
 * @author Adtiya
 * @date 2021/6/29
 */
import { Link } from 'umi';
import { Menu } from 'antd';
import { DatabaseOutlined, AreaChartOutlined } from '@ant-design/icons';

interface NavHeaderProps {
  activePath: string;
}

export default function NavHeader({ activePath }: NavHeaderProps) {
  return (
    <Menu mode="horizontal" activeKey={activePath}>
      <Menu.Item key="/dataset" icon={<DatabaseOutlined />}>
        <Link to="/dataset">数据集</Link>
      </Menu.Item>
      <Menu.Item key="/dashboard" icon={<AreaChartOutlined />}>
        <Link to="/dashboard">仪表板</Link>
      </Menu.Item>
    </Menu>
  );
}
