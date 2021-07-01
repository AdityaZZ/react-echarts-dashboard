/**
 * dataset page
 * @author Adtiya
 * @date 2021/6/29
 */
import { connect, ConnectProps, DatasetModelState, Loading } from 'umi';
import { Spin } from 'antd';

import DatasetSelector from './datasetSelector';
import DatasetTable from './datasetTable';

interface DatasetProps extends ConnectProps {
  datasetModel: DatasetModelState;
  loading: boolean;
}

function Dataset(props: DatasetProps) {
  const {
    loading,
    datasetModel: { activeTableName, queryExecResult },
  } = props;
  return (
    <Spin spinning={loading}>
      <DatasetSelector activeTableName={activeTableName} />
      <DatasetTable queryExecResult={queryExecResult} />
    </Spin>
  );
}

export default connect(
  ({
    datasetModel,
    loading,
  }: {
    datasetModel: DatasetModelState;
    loading: Loading;
  }) => ({
    datasetModel,
    loading: loading.models.datasetModel,
  }),
)(Dataset);
