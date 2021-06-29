/**
 * NavHeader
 * @author Adtiya
 * @date 2021/6/29
 */
import { Link } from 'umi';
import { Menu } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';

export default function NavHeader() {
  return (
    <Menu mode="horizontal">
      <Link to="/dataset">
        <Menu.Item key="dataset" icon={<DatabaseOutlined />}>
          数据集
        </Menu.Item>
      </Link>
    </Menu>
  );
}
