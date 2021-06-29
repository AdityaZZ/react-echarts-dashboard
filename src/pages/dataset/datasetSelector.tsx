/**
 * datasetSelector
 * @author Adtiya
 * @date 2021/6/29
 */
import React from 'react';
import { Radio } from 'antd';
import { DatasetDataModel } from 'umi';

interface DatasetSelectorProps {
  datasetList: DatasetDataModel[];
  activeDatasetId: number;
}

export default function DatasetSelector({
  activeDatasetId,
  datasetList,
}: DatasetSelectorProps) {
  const renderRadio = () => {
    return datasetList.map((dataset) => (
      <Radio.Button key={dataset.id} value={dataset.id}>
        {dataset.name}
      </Radio.Button>
    ));
  };

  return (
    <Radio.Group value={activeDatasetId} buttonStyle="solid">
      {renderRadio()}
    </Radio.Group>
  );
}
