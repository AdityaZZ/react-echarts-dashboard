/**
 * datasetSelector
 * @author Adtiya
 * @date 2021/6/29
 */
import React from 'react';
import { Dispatch, useDispatch } from 'umi';
import { Radio } from 'antd';

import { BI_TABLES } from '@/utils/config';

interface DatasetSelectorProps {
  activeTableName: string;
}

export default function DatasetSelector({
  activeTableName,
}: DatasetSelectorProps) {
  const dispatch: Dispatch = useDispatch();

  const handleRadioChange = (value: string) => {
    dispatch({
      type: 'datasetModel/updateActiveTableName',
      payload: {
        activeTableName: value,
      },
    });
  };

  const renderRadio = () => {
    return BI_TABLES.map((tableName) => (
      <Radio.Button key={tableName} value={tableName}>
        {tableName}
      </Radio.Button>
    ));
  };

  return (
    <Radio.Group
      onChange={(e) => handleRadioChange(e.target.value)}
      value={activeTableName}
      buttonStyle="solid"
    >
      {renderRadio()}
    </Radio.Group>
  );
}
