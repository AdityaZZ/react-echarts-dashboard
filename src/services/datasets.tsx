import { request } from 'umi';
import { BASE_URL } from '@/utils/config';
/**
 * datasets
 * @author Adtiya
 * @date 2021/6/29
 */

/**
 * 查询所有数据集
 */
export function fetchDatasetList() {
  return request(`${BASE_URL}/datasets`, {
    method: 'GET',
  });
}

/**
 * 通过数据集ID查询明细
 * @param datasetId
 */
export function fetchDatasetDataById(datasetId: number) {
  return request(`${BASE_URL}/datasetRecords`, {
    method: 'GET',
    query: { datasetId },
  });
}
