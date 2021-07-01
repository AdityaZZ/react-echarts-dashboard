/**
 * datasets
 * @author Adtiya
 * @date 2021/6/29
 */
import DbUtils from '@/utils/dbUtils';

export async function selectByTableName(tableName: string) {
  console.log('tableName', tableName);
  return DbUtils.selectByTableName(tableName);
}
