/**
 * datasetTable
 * @author Adtiya
 * @date 2021/6/29
 */
import { Table } from 'antd';
import { QueryExecResult } from 'sql.js';
import _ from 'lodash';

interface DatasetTableProps {
  queryExecResult: QueryExecResult[];
}

export default function DatasetTable({ queryExecResult }: DatasetTableProps) {
  const generateColumns = () => {
    if (!_.isEmpty(queryExecResult)) {
      return queryExecResult[0].columns.map((columnName) => ({
        title: columnName,
        dataIndex: columnName,
        width: 180,
      }));
    }
    return [];
  };

  const generateData = () => {
    if (!_.isEmpty(queryExecResult)) {
      const columns = queryExecResult[0].columns || [];
      const values = queryExecResult[0].values || [];
      return values.map((recordValues, recordIndex) => {
        return recordValues.reduce(
          (preValue: { [key: string]: any }, currentValue, currentIndex) => {
            const key: string = columns[currentIndex];
            preValue.key = recordIndex;
            preValue[key] = currentValue;
            return preValue;
          },
          {},
        );
      });
    }
    return [];
  };

  const tableColumns = generateColumns();
  const tableDataSource = generateData();

  return (
    <Table
      style={{ padding: 10 }}
      columns={tableColumns}
      dataSource={tableDataSource}
      size="middle"
      pagination={false}
      scroll={{ x: 1500, y: 400 }}
    />
  );
}
