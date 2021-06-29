/**
 * datasetTable
 * @author Adtiya
 * @date 2021/6/29
 */
import { Table } from 'antd';
import { DatasetRecordDataModel } from 'umi';
import _ from 'lodash';

interface DatasetTableProps {
  activeDatasetRecord: DatasetRecordDataModel;
}

export default function DatasetTable({
  activeDatasetRecord,
}: DatasetTableProps) {
  const { fields = [], data = [] } = activeDatasetRecord;

  const generateColumns = () => {
    if (!_.isEmpty(fields)) {
      return fields.map((field, index) => ({
        title: field.name,
        dataIndex: field.name,
        width: 400,
      }));
    }
    return [];
  };

  const generateData = () => {
    if (!_.isEmpty(fields) && !_.isEmpty(data)) {
      const fieldNames = fields.map((filed) => filed.name);
      return data.map((record: [], index) => {
        return record.reduce(
          (previousValue: any, currentValue: any, currentIndex) => {
            previousValue[fieldNames[currentIndex]] = currentValue;
            return previousValue;
          },
          { key: index },
        );
      });
    }
    return [];
  };

  const columns = generateColumns();
  const dataSource = generateData();
  console.log(columns);
  console.log(dataSource);

  return (
    <div style={{ padding: 10, overflow: 'auto' }}>
      <Table
        columns={columns}
        dataSource={dataSource}
        size="middle"
        pagination={false}
      />
    </div>
  );
}
