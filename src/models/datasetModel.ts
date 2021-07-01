/**
 * dataset
 * @author Adtiya
 * @date 2021/7/1
 */
import { Effect, Reducer, Subscription } from 'umi';
import _ from 'lodash';
import { QueryExecResult } from 'sql.js';

import { BI_TABLES } from '@/utils/config';
import { selectByTableName } from '@/services/datasetService';

export interface DatasetModelState {
  activeTableName: string;
  queryExecResult: QueryExecResult[];
}

export interface DatasetModelType {
  namespace: 'datasetModel';
  state: DatasetModelState;
  effects: {
    selectByTableName: Effect;
    updateActiveTableName: Effect;
  };
  reducers: {
    save: Reducer<DatasetModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const DatasetModel: DatasetModelType = {
  namespace: 'datasetModel',
  state: {
    activeTableName: BI_TABLES[0],
    queryExecResult: [],
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    *selectByTableName({ payload: { tableName } }, { call, put }) {
      const queryExecResult = yield call(selectByTableName, tableName);
      yield put({
        type: 'save',
        payload: { queryExecResult },
      });
    },
    *updateActiveTableName({ payload: { activeTableName } }, { call, put }) {
      const queryExecResult = yield call(selectByTableName, activeTableName);
      yield put({
        type: 'save',
        payload: { activeTableName, queryExecResult },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dataset') {
          dispatch({
            type: 'selectByTableName',
            payload: { tableName: BI_TABLES[0] },
          });
        }
      });
    },
  },
};

export default DatasetModel;
