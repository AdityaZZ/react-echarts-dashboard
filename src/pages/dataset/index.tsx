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
  dataset: DatasetModelState;
  loading: boolean;
}

function Dataset(props: DatasetProps) {
  const {
    loading,
    dataset: { datasetList = [], activeDatasetId, activeDatasetRecord = {} },
  } = props;
  console.log(props);
  return (
    <Spin spinning={loading}>
      <DatasetSelector
        activeDatasetId={activeDatasetId}
        datasetList={datasetList}
      />
      <DatasetTable activeDatasetRecord={activeDatasetRecord} />
    </Spin>
  );
}

export default connect(
  ({ dataset, loading }: { dataset: DatasetModelState; loading: Loading }) => ({
    dataset,
    loading: loading.models.dataset,
  }),
)(Dataset);
